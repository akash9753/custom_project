import express from "express";
import { asyncWrapper } from "../common/utils/wrapper";
import createUserValidator from "../user/createUserValidator";
import { UserService } from "../user/userService";
import { TokenService } from "./tokenService";
import { CredentialService } from "./credentialService";
import { AuthController } from "./authController";
import authValidator from "./authValidator";
import authenticate from "../common/middlewares/authenticate";

const router = express.Router();

const userService = new UserService();

const tokenService = new TokenService();
const credentialService = new CredentialService();
const authController = new AuthController(
    userService,
    tokenService,
    credentialService,
);

router.post(
    "/signup",
    createUserValidator,
    asyncWrapper(authController.register),
);

router.post("/login", authValidator, asyncWrapper(authController.login));

router.get("/self",authenticate, asyncWrapper(authController.self));

router.post("/logout",authenticate, asyncWrapper(authController.logout))

export default router;
