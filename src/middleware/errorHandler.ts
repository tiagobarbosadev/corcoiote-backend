import type { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors/index.ts';

export default function errorHandler(
    error: unknown,
    _request: Request,
    response: Response ,
    next: NextFunction) 	{
        if (error instanceof NotFoundError) {
            response.status(error.statusCode).json({ error: error.message });
            return;
    
     }
      console.log(error);
      response.status(500).json	({ message: 'Erro interno do servidor.' });
    }