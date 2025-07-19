/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';

import {
    BAD_REQUEST,
    USER_EXIST,
    USER_NOT_FOUND,
    WRONG_PASSWORD,
} from 'src/constants';
import { createUser, readUserByEmail } from 'src/model/user';
import { hashGenerator, isHash, tokenGenerator } from 'src/utils';

export const loginController = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }

    const data = req.body;

    const userExit = await readUserByEmail(data.email);
    if (!userExit) {
        res.status(401).json({
            errcode: USER_NOT_FOUND,
            message: 'user not found',
        });
        return;
    }

    const isMatch = await isHash(data.password, userExit.hash);
    if (!isMatch) {
        res.status(401).json({
            errcode: WRONG_PASSWORD,
            message: 'wrong password',
        });
    }

    const token = tokenGenerator(userExit.id, userExit.role);
    res.status(200).json({
        user: userExit,
        token,
    });
};

export const registerController = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }

    const data = req.body;
    const userExit = await readUserByEmail(data.email);
    if (userExit) {
        res.status(401).json({
            errcode: USER_EXIST,
            message: 'user already exist',
        });
        return;
    }

    const hash = await hashGenerator(data.password);
    const newUser = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        role: data?.role?.toUpperCase(),
        hash,
    };
    const user = await createUser(newUser as any);
    const token = tokenGenerator(user.id, user.role);

    res.status(200).json({
        user,
        token,
    });
};
