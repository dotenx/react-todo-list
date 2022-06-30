import axios from "axios";

function authService() {

  const register = async (fullname, email, password) => {
    try {
      await axios.post(
        "https://api.dotenx.com/user/management/project/noelOND7MdGyoUDU/register",
        {
          fullname,
          email,
          password,
        }
      );
    } catch (error) {
      throw new Error(`Failed to sign up: ${error.message}`);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://api.dotenx.com/user/management/project/noelOND7MdGyoUDU/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("expirationTime", response.data.expirationTime);
    } catch (error) {
      throw new Error(`Failed to log in: ${error.message}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expirationTime");
  };

  const getToken = () => {
    return localStorage.getItem("accessToken");
  };

  const isLoggedIn = () => {
    return localStorage.getItem("accessToken") ? true : false;
    // TODO: check if the token is expired
  };

  return {
    register,
    login,
    logout,
    getToken,
    isLoggedIn,
  };
}

export default authService;