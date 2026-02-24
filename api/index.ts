import express from 'express';
import type { Express, Request, Response } from 'express';
import { getUser } from './controller/userController.js';

import cors from 'cors';
import dotenv from 'dotenv';
import { get } from 'node:http';

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Hello World route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.get('/user', getUser);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
