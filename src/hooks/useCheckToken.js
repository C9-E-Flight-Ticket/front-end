import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const useCheckToken = () => {
  const access_token = Cookies.get("access_token");

  if (!access_token) {
    console.log("Token not found");
    return false;
  }

  try {
    const decodedToken = jwtDecode(access_token);
    const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      console.log("Token expired");
      return false;
    }

    console.log("Token is valid");
    return true;
  } catch (error) {
    console.error("Invalid token", error);
    return false;
  }
};

export default useCheckToken;
