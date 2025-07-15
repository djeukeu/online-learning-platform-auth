import { Router } from 'express';

import { getAllUserController, getUserController } from 'src/controller/user';
import { getUserSchema } from 'src/schema/user';

const userRouter = Router();

userRouter.get('/', getAllUserController);

userRouter.get('/:id', getUserSchema, getUserController);

export default userRouter;
