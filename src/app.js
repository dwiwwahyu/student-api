import { Hono } from 'hono'
import { routes } from './routes.js'

export const app = new Hono()

app.get('/', (c) => c.text('Student API running'))

app.route('/api', routes)

