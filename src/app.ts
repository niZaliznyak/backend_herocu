import express, { Request, Response } from 'express'
import { routerCourses } from './routes/courses/courses'
import { connectToDb, getMoviesCollection } from './db/mongo'

const app = express()

connectToDb()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('wow')
})

app.use(routerCourses)

export default app
