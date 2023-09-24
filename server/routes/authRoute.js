import express from "express";
import {
  registerController,
  loginController,
  testController,
  fpController,
  rpController,
  upController,
  logout,
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/logout", logout);

//FORGOT PASSWORD
router.post("/forget-password", fpController);

//RESET PASSWORD
router.get("/reset-password", rpController);
router.post("/reset-password", upController);

//TEST ROUTES
router.get("/test", requireSignIn, isAdmin, testController);

//Protected User Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Protected Admin Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
