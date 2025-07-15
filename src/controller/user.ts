import { Response, Request } from 'express';

export const getAllUserController = async (_req: Request, res: Response) => {
    res.json({ message: 'OK' });
};

export const getUserController = async (_req: Request, res: Response) => {
    res.json({ message: 'OK' });
};

export const patchUserController = async (_req: Request, res: Response) => {
    res.json({ message: 'OK' });
};

export const deleteUserController = async (_req: Request, res: Response) => {
    res.json({ message: 'OK' });
};
