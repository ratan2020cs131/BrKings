import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Token is missing",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.jwt_secret);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Unauthorized access",
      error,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in admin middleware",
      error,
    });
  }
};
