import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (req: Request, _: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
};