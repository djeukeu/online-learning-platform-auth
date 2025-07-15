/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import config from 'src/config';
import { UNAUTHENTICATED } from 'src/constants';

const authorizeRequest = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            errcode: UNAUTHENTICATED,
            message: 'user is not authenticated',
        });
        return;
    }
    const token = authorization.replace('Bearer ', '');
    try {
        verify(token, config.secret_key as string);
        next();
    } catch (err: any) {
        res.status(401).json({
            errcode: UNAUTHENTICATED,
            message: err.message,
        });
    }
};

export default authorizeRequest;
