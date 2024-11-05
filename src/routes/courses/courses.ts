import { Express, Request, Response } from 'express'

import { RequestWithBody, RequestWithQuery } from '../../types'
import { CourseType, DBType } from '../../db/db'

export type CourseQuery = {
  search?: string
}

export const addCoursesRoutes = (app: Express, db: DBType) => {
  app.get('/courses', (req: RequestWithQuery<CourseQuery>, res: Response<CourseType[]>) => {
    let { courses } = db

    if (req.query.search) {
      courses = courses.filter(({ name }) => name.includes(req.query.search!))
    }

    res.status(200).json(courses)
  })

  app.get('/courses/:id', (req: Request<{ id: String }>, res) => {
    const requestedCourse = db.courses.find((c) => c.id === +req.params.id)

    if (!requestedCourse) {
      res.status(404).send('no course found')
      return
    }

    res.status(200).json(requestedCourse)
  })

  app.post('/courses', (req: RequestWithBody<{ name: string }>, res: Response<CourseType>) => {
    const { name } = req.body
    if (!name) {
      res.status(400)
      return
    }

    const newCourse = { id: +new Date(), name }
    db.courses.push(newCourse)

    res.status(201).json(newCourse)
  })
}
