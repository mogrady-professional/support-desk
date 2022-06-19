// import axios
import axios from "axios";
// Define the base url
const API_URL = "/api/users";

// Register user route -from application
export const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  // Check response
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
