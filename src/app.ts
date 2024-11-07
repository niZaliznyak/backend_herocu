import express, { Request, Response } from 'express'
import { routerCourses } from './routes/courses/courses'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('wow')
})

app.use(routerCourses)

export default app
