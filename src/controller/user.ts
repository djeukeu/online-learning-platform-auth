import { Response, Request } from 'express';
import { validationResult } from 'express-validator';

import { BAD_REQUEST } from 'src/constants';
import { readAllUser, readUserById } from 'src/model/user';

export const getAllUserController = async (_req: Request, res: Response) => {
    const users = await readAllUser();
    res.status(200).json(users);
};

export const getUserController = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errcode: BAD_REQUEST, message: result.array() });
        return;
    }

    const id = req.params['id'];
    const user = await readUserById(id as string);

    res.status(200).json(user);
};
