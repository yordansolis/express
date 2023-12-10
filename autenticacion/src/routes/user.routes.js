import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewars";

const router = Router();

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExited
    ],
    
    userController.createUser);

export default router;