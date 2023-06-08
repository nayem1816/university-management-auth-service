import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users', UserRoutes)

// // default route
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Route not found')
// })

// Global error handler
app.use(globalErrorHandler)

export default app
