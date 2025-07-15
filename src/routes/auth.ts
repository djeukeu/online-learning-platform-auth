import { Router } from 'express';

import {
    loginController,
    logoutController,
    registerController,
} from 'src/controller/auth';
import { registerSchema } from 'src/schema/auth';

const authRouter = Router();

authRouter.post('/login', loginController);

authRouter.post('/signup', registerSchema, registerController);

authRouter.post('/logout', logoutController);

export default authRouter;
