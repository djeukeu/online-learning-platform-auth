import { Router } from 'express';

import { getAllUserController, getUserController } from 'src/controller/user';
import authorizeRequest from 'src/middleware/authorizeRequest';
import { getUserSchema } from 'src/schema/user';

const userRouter = Router();

userRouter.get('/', authorizeRequest, getAllUserController);

userRouter.get('/:id', authorizeRequest, getUserSchema, getUserController);

export default userRouter;
