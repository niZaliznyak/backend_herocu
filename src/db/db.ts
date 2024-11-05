export type CourseType = {
  id: number
  name: string
}

export type DBType = {
  courses: CourseType[]
}

export const DB: DBType = {
  courses: [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
  ],
}
