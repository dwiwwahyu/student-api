import { Hono } from 'hono'
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from './student.controller.js'

export const studentRoutes = new Hono()

studentRoutes.get('/', getAllStudents)
studentRoutes.get('/:id', getStudentById)
studentRoutes.post('/', createStudent)
studentRoutes.put('/:id', updateStudent)
studentRoutes.delete('/:id', deleteStudent)

