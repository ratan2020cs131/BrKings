import axios from "axios";
import axiosToken from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};

const getProduct = async (id) => {
  const response = await axiosToken.get(`${base_url}product/${id}`);

  return response.data;
};

const productApi = {
  getProducts,
  getProduct,
};

export default productApi;