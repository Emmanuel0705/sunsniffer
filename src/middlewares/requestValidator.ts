import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";
import queryBoundaries from "../utils/queryBoundaries";
const ValidateRequstParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const boundaries: [number] = queryBoundaries(req.query);

    (req.query as any).boundaries = boundaries;

    next();
};

export default ValidateRequstParams;
