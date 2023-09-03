import axios from "axios";

const urlEnv = document.URL.includes("localhost")
  ? "development"
  : document.URL.includes(".sec")
  ? "Security"
  : document.URL.includes("test")
  ? "Staging"
  : document.URL.includes("ava")
  ? "Production"
  : null;
console.log(urlEnv);

if (urlEnv === "Staging") {
  axios.defaults.baseURL = process.env.REACT_APP_API_STAGING_URL;
} else if (urlEnv === "Production") {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
} else if (urlEnv === "Security") {
  axios.defaults.baseURL = process.env.REACT_APP_API_SEC_URL;
} else if (urlEnv === "development") {
  axios.defaults.baseURL = process.env.REACT_APP_API_DEV_URL;
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Error", error);
    //alert("یک خطای پیش بینی نشده رخ داده است");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  CancelToken: axios.CancelToken,
  isCancel: axios.isCancel,
};
