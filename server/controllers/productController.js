import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    const { photo } = req.files;
    if (!name) {
      return res.status(500).send({ error: "Name is required" });
    }
    if (!description) {
      return res.status(500).send({ error: "Description is required" });
    }
    if (!price) {
      return res.status(500).send({ error: "Price is required" });
    }
    if (!category) {
      return res.status(500).send({ error: "Category is required" });
    }
    if (!quantity) {
      return res.status(500).send({ error: "Quantity is required" });
    }
    if (photo && photo.size > 2000000) {
      return res
        .status(500)
        .send({ error: "Photo is required and should be less than 2MB" });
    }
    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating product",
    });
  }
};

export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalProducts: products.length,
      message: "List of All Products",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting all products",
    });
  }
};

export const singleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Fetched Single Product Successfullly",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting single product",
    });
  }
};

export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-Type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting photo",
      error,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    const { photo } = req.files;
    if (!name) {
      return res.status(500).send({ error: "Name is required" });
    }
    if (!description) {
      return res.status(500).send({ error: "Description is required" });
    }
    if (!price) {
      return res.status(500).send({ error: "Price is required" });
    }
    if (!category) {
      return res.status(500).send({ error: "Category is required" });
    }
    if (!quantity) {
      return res.status(500).send({ error: "Quantity is required" });
    }
    if (photo && photo.size > 2000000) {
      return res
        .status(500)
        .send({ error: "Photo is required and should be less than 2MB" });
    }
    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating product",
    });
  }
};

export const filterProductController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
  } catch (error) {
    console.log(error);
    res.status(400).send({
      sucess: false,
      error,
      message: "Error in filtering products",
    });
  }
};
