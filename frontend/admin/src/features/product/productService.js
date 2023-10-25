import axios from "axios";
import axiosToken from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};
const createProduct = async (product) => {
  console.log(product)
  const response = await axiosToken.post(`${base_url}product/`, product);

  return response.data;
};

const getProduct = async (id) => {
  const response = await axiosToken.get(`${base_url}product/${id}`);

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axiosToken.delete(`${base_url}product/${id}`);

  return response.data;
};
const updateProduct = async (id) => {
  console.log(id);
  const response = await axiosToken.put(
    `${base_url}product/${id.id}`,
    { title: id.pData.title,
    description: id.pData.description,
    
   }
  );

  return response.data;
};


const productService = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
