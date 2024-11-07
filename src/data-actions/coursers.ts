import { DB } from '../db/db'
class DataActionsCourses {
  private _getCoursesData() {
    return DB.courses
  }

  getCourses(search: string) {
    const courses = this._getCoursesData()

    if (!search) {
      return courses
    }

    return courses.filter(({ name }) => name.includes(search))
  }

  getCourseById(id: string) {
    const courses = this._getCoursesData()
    return courses.find((course) => course.id === id)
  }

  createCourse(name: string) {
    if (!name) {
      return
    }

    const newCourse = { id: new Date().toString(), name }
    this._getCoursesData().push(newCourse)

    return newCourse
  }
}

export const dataActionsCourses = new DataActionsCourses()
