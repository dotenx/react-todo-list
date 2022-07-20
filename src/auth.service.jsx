import axios from "axios";

function authService() {
  const register = async (fullname, email, password) => {
    try {
      await axios.post("<paste 'Sign up a user' endpoint here >", {
        fullname,
        email,
        password,
      });
    } catch (error) {
      throw new Error(`Failed to sign up: ${error.message}`);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("<paste 'Sign in' endpoint here >", {
        email,
        password,
      });

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
