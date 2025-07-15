import { Response, Request } from 'express';

export const loginController = async (_req: Request, res: Response) => {
    res.json({ message: 'OK' });
};

export const registerController = async (_req: Request, res: Response) => {
    res.json({ message: 'OK' });
};

export const logoutController = async (_req: Request, res: Response) => {
    res.json({ message: 'OK' });
};
