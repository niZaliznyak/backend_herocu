import express, { Request, Response } from 'express'

const port = 3000

const app = express()
app.use(express.json())

interface CourseQuery {
  search?: string
}

app.get('/', (req, res) => {
  res.status(200).json('wow')
})

const DB = [
  { id: 1, name: 'course 1' },
  { id: 2, name: 'course 2' },
]

app.get('/courses', (req: Request<{}, {}, {}, CourseQuery>, res) => {
  let foundCurses = DB

  if (req.query.search) {
    foundCurses = DB.filter(({ name }) => name.includes(req.query.search!))
  }

  res.status(200).json(foundCurses)
})

app.get('/courses/:id', (req, res) => {
  const requestedCourse = DB.find((c) => c.id === +req.params.id)

  if (!requestedCourse) {
    res.status(404).send('no course found')
    return
  }

  res.status(200).json(requestedCourse)
})

app.post('/courses', (req: Request, res) => {
  const { name } = req.body
  if (!name) {
    res.status(400)
    return
  }

  const newCourse = { id: +new Date(), name }
  DB.push(newCourse)

  res.status(201).json(newCourse)
})

app.listen(port, () => {
  console.log('Server launched')
})
