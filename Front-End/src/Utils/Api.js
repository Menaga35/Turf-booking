// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://vercel.com/menagas-projects-35240fdd/turf-booking/api",
// });

// // token
// API.interceptors.request.use((req) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user?.token) {
//     req.headers.Authorization = `Bearer ${user.token}`;
//   }
//   return req;
// });
// export default API;
import axios from "axios";

const API = axios.create({
  baseURL: "https://turf-booking-backend-od0i.onrender.com/api/users",
});

export default API;
