import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useTicketInputCheck = (isTokenValid, passengers) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenValid) {
      document.body.style.overflow = "hidden";
      setTimeout(() => navigate("/"), 2000);
    } else {
      document.body.style.overflow = "";
      const totalPassenger = passengers.adult + passengers.child;
      if (totalPassenger == 0) navigate("/");
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isTokenValid, navigate, passengers]);
};

export default useTicketInputCheck;
