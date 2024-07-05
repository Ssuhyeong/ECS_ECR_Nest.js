// logger.middleware.ts
import { Request, Response } from 'express';

export function loggerMiddleware(
    req: Request,
    res: Response,
    next: () => void
) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}
