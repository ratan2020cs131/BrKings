import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//CREATE CATEGORY
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//UPDATE CATEGORY
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

export default router;
