import express from "express";
import { newUser, login, searchUser, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newUser);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, searchUser);

export default router;
