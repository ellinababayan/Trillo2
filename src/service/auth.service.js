import axios from "axios";
// import API from '../constants/apis';

const signupUser = async (values) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/user/", values);
    localStorage.setItem("token", response.data.access);
    localStorage.setItem("refreshToken", response.data.refresh);
    return true;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 400) {
      throw new Error("Account with this email address already exists");
    }
    throw new Error("An error occurred while signing up");
  }
};

const checkAuthentication = () => {
  const token = localStorage.getItem("access_token");
  return token ? true : false;
};

const loginUser = async (values) => {
  console.log("Login request values:", values);
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/token/", {
      username: values.username, // Assuming your email field corresponds to the username field
      password: values.password,
    });

    console.log("Response Status:", response.status);
    const { access_token, refresh_token } = response.data;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    return true;
  } catch (error) {
    console.error(error);
    console.log("Error Response Status:", error.response.status);
    if (error.response && error.response.status === 401) {
      throw new Error("Your email or password does not match");
    }
    throw new Error("An error occurred while logging in");
  }
};

const logoutUser = async () => {
  localStorage.clear();
};

const refreshJWTToken = async () => {
  const storedRefreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/token/refresh/",
      {
        refresh: storedRefreshToken,
      }
    );
    if (response.data && response.data.access) {
      console.log("token refreshed! response.data:", response.data);
      const token = response.data.access;
      localStorage.setItem("token", token);
      return token;
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw new Error("An error occurred while refreshing the token");
  }
};

export default {
  checkAuthentication,
  signupUser,
  loginUser,
  logoutUser,
  refreshJWTToken,
};
