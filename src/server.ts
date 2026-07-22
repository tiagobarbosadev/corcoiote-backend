import express from 'express';
import errorHandler from './middleware/errorHandler.ts';
import requestLogger from './middleware/requestLogger.ts';
import { customers } from './mocks/customer.mock.ts';

const app = express();

app.use(requestLogger);

app.use(express.json());

app.get('/customers', (_req, res) => {
	res.status(200).json(customers);
});

app.use((_req, res) => {
	res.status(404).json({ message: 'not found' });
});

app.use(errorHandler);

app.listen(Number(process.env.PORT));
