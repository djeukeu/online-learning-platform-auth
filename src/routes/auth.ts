import { Router } from 'express';

import { loginController, registerController } from 'src/controller/auth';
import { loginSchema, registerSchema } from 'src/schema/auth';

const authRouter = Router();

authRouter.post('/login', loginSchema, loginController);

authRouter.post('/signup', registerSchema, registerController);

export default authRouter;
