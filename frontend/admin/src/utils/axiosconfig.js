import axios from 'axios';

const axiosToken = axios.create({});

axiosToken.interceptors.request.use((req)=>{
  const getTokenFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const token = getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : "";
  req.headers.Authorization=`Bearer ${token}`;
  return req;
})

export default axiosToken;
