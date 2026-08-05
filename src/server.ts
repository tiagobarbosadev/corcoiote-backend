import express from 'express';
import { pinoHttp } from 'pino-http';
import errorHandler from './middleware/errorHandler.ts';
import CustomerRouter from './routes/customer.routes.ts';

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!',
	});
});

app.use(errorHandler);

app.listen(Number(process.env.PORT));
