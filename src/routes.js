import { Hono } from 'hono'
import { studentRoutes } from './modules/student/student.routes.js'

export const routes = new Hono()

routes.route('/students', studentRoutes)

