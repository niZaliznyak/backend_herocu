import express, { Request, Response } from 'express'
import { addCoursesRoutes } from './routes/courses/courses'
import { DB } from './db/db'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('wow')
})

const coursesRouter = addCoursesRoutes(DB)

app.use(coursesRouter)

export default app
