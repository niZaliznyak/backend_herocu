import { DB } from '../db/db'

class DataActionsCourses {
  getCourses(search: string) {
    if (!search) {
      return DB.courses
    }

    return DB.courses.filter(({ name }) => name.includes(search))
  }

  getCourseById(id: string) {
    return DB.courses.find((course) => course.id === id)
  }

  createCourse(name: string) {
    if (!name) {
      return
    }
    const newCourse = { id: new Date().toString(), name }
    DB.courses.push(newCourse)
    return newCourse
  }
}

export const dataActionsCourses = new DataActionsCourses()
