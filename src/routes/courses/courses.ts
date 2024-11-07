import express, { Request, Response } from 'express'

import { RequestWithBody, RequestWithQuery } from '../../types'
import { CourseType } from '../../db/db'
import { dataActionsCourses } from '../../data-actions/coursers'

export type CourseQuery = {
  search?: string
}

const routerCourses = express.Router()

routerCourses.get('/courses', (req: RequestWithQuery<CourseQuery>, res: Response<CourseType[]>) => {
  const courses = dataActionsCourses.getCourses(req.query.search || '')
  res.status(200).json(courses)
})

routerCourses.get('/courses/:id', (req: Request<{ id: string }>, res) => {
  const requestedCourse = dataActionsCourses.getCourseById(req.params.id)

  if (!requestedCourse) {
    res.status(404).send('no course found')
    return
  }

  res.status(200).json(requestedCourse)
})

routerCourses.post('/courses', (req: RequestWithBody<{ name: string }>, res: Response<CourseType>) => {
  const newCourse = dataActionsCourses.createCourse(req.body.name)
  if (!newCourse) {
    res.status(400)
  }

  res.status(201).json(newCourse)
})

export { routerCourses }
