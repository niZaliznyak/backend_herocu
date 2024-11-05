import express, { Request, Response } from 'express'
import { addCoursesRoutes } from './routes/courses/courses'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('wow')
})

addCoursesRoutes(app)

export default app
