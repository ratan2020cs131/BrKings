import axios from "axios";
import axiosToken from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
import { toast } from "react-toastify";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category/`);

  return response.data;
};
const createCategory = async (category) => {
  const response = await axiosToken.post(`${base_url}category/`, category);

  return response.data;
};

const getProductCategory = async (id) => {
  const response = await axiosToken.get(`${base_url}category/${id}`);

  return response.data;
};

const deleteProductCategory = async (id) => {
  const response = await axiosToken.delete(`${base_url}category/${id}`);

  return response.data;
};
const updateProductCategory = async (category) => {
  console.log(category);
  const response = await axiosToken.put(
    `${base_url}category/${category.id}`,
    { title: category.pCatData.title }
  );

  return response.data;
};
const pCategoryService = {
  getProductCategories,
  createCategory,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};

export default pCategoryService;
