export type CourseType = {
  id: string
  name: string
}

export type DBType = {
  courses: CourseType[]
}

export const DB: DBType = {
  courses: [
    { id: '1111', name: 'course 1' },
    { id: '2222', name: 'course 2' },
  ],
}
