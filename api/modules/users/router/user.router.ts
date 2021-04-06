'use strict';
import { Router } from 'express';

import UserController from '../controllers/users.controller';

// const CategoryValidator = require('../validators/category.validators');
const userRouter = Router();

userRouter.get('/', UserController.getListUser);

userRouter.get('/create', UserController.formCreateUser);

userRouter.post('/create', UserController.createUser);

userRouter.get('/edit/:id', UserController.formEditUser);

userRouter.post('/edit', UserController.editUser);

userRouter.post('/delete/:id', UserController.deleteUser);

export default userRouter;
