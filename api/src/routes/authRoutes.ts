import { Router } from "express";
import { login } from "../controllers/user/auth/authController";

const router = Router();

router.post("/login", login);

export default router;
