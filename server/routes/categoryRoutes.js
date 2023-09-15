import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  fetchCategoriesController,
  singleCategoryController,
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

//FETCH ALL CATEGORIES
router.get("/fetch-categories", fetchCategoriesController);

//FETCH SINGLE CATEGORY
router.get("/single-category/:slug", singleCategoryController);

//DELETE CATEGORY
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;