import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const useCheckToken = () => {
  const accessToken = Cookies.get("token");

  if (!accessToken) {
    console.log("Token not found");
    return false;
  }

  try {
    const decodedToken = jwtDecode(accessToken);
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
