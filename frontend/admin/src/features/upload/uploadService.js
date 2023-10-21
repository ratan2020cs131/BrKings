import axios from "axios";
import axiosToken, { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const uploadImg = async (data) => {
  const response = await axiosToken.post(`${base_url}upload/`, data);
  return response.data;
};
const deleteImg = async (id) => {
  const response = await axiosToken.delete(
    `${base_url}upload/delete-img/${id}`
  );
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;
