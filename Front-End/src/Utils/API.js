import axios from "axios";

const API = axios.create({
  baseURL: "https://turf-booking-backend-od0i.onrender.com/api/users",
});

export default API;
