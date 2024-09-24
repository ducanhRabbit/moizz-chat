import axios from "axios";

const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({ baseURL: BASE_URL,withCredentials:true, headers: {
  "Content-Type": "application/json",
}, });

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers['authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async(error) =>{
    try{
      console.log('hello')
      const status = error.response.status
      if(status === 401 || status === 403){
        // Refresh access token
        const res = await axiosInstance.post('/auth/refresh')
        const accessToken = res.data.token
        error.config.headers['authorization'] = `Bearer ${accessToken}`
        localStorage.setItem('accessToken',accessToken)
        axiosInstance.request(error.config)
      }
      return Promise.reject((error.response && error.response.data) || 'Something went wrong')
    }catch(err){
      console.log(err)
    }
  
  }
);

export default axiosInstance;
