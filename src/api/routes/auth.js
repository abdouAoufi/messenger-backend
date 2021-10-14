import { Router } from "express";
import { handleAuth } from "../controllers/user.js";

const router = Router();

router.post("/auth", handleAuth);

export default router;
