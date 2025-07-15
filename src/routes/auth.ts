import { Router } from 'express';

import {
    loginController,
    logoutController,
    registerController,
} from 'src/controller/auth';

const authRouter = Router();

authRouter.post('/login', loginController);

authRouter.post('/signup', registerController);

authRouter.post('/logout', logoutController);

export default authRouter;
