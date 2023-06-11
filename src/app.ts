import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1', routes);

// // default route
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Route not found')
// })

// Global error handler
app.use(globalErrorHandler);

export default app;
