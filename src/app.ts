import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/config/modules/student/student.route';
const app: Application = express();

// parsers
app.use(express.json());

// cors
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getController);

export default app;
