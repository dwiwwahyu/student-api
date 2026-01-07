import { prisma } from '../../config/prisma.js'

// GET /api/students
export const getAllStudents = async (c) => {
  const students = await prisma.student.findMany()
  return c.json(students)
}

// GET /api/students/:id
export const getStudentById = async (c) => {
  const id = Number(c.req.param('id'))

  const student = await prisma.student.findUnique({
    where: { id },
  })

  if (!student) {
    return c.json({ message: 'Student not found' }, 404)
  }

  return c.json(student)
}

// POST /api/students
export const createStudent = async (c) => {
  const body = await c.req.json()

  const student = await prisma.student.create({
    data: {
      name: body.name,
      email: body.email,
      age: body.age,
    },
  })

  return c.json(student, 201)
}

// PUT /api/students/:id
export const updateStudent = async (c) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()

  const student = await prisma.student.update({
    where: { id },
    data: body,
  })

  return c.json(student)
}

// DELETE /api/students/:id
export const deleteStudent = async (c) => {
  const id = Number(c.req.param('id'))

  await prisma.student.delete({
    where: { id },
  })

  return c.json({ message: 'Student deleted' })
}

