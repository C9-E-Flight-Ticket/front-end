import { useNavigate } from "react-router-dom";
import useCheckToken from "@/hooks/useCheckToken";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const isTokenValid = useCheckToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenValid) {
      navigate("/");
      return;
    }
  }, [isTokenValid, navigate]);

  return children;
};

export default ProtectedRoute;
