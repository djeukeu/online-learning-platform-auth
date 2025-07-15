import { Router } from 'express';

import {
    getAllUserController,
    deleteUserController,
    getUserController,
    patchUserController,
} from 'src/controller/user';

const userRouter = Router();

userRouter.get('/', getAllUserController);

userRouter.get('/:id', getUserController);

userRouter.patch('/', patchUserController);

userRouter.delete('/', deleteUserController);

export default userRouter;
