import axios from "axios";

const API = axios.create({
  baseURL: "https://turf-booking-indol.vercel.app/api",
});

// token
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});
export default API;
// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api/users",
// });

// export default API;
