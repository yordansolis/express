import { Router } from "express";
const router = Router();


import * as userController from "../controllers/auth.controller";
import { verifySignup } from "../middlewars";


router.post('/signup',
    [   verifySignup.checkDuplicateUsernameOrEmail,
        verifySignup.checkRolesExited
    ],
    userController.signup)


router.post('/signin', userController.signin)


export default router;