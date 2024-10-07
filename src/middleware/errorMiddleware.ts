import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
};
