import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const useCheckToken = () => {
  const access_token = Cookies.get("access_token");

  if (!access_token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(access_token);
    const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam detik

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Invalid token", error);
    return false;
  }
};

export default useCheckToken;
