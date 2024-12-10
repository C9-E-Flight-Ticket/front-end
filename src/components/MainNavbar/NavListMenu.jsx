import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Menu from "@/components/MainNavbar/Menu";
import useCheckToken from "@/hooks/useCheckToken";
import { useNavigate } from "react-router-dom";

const NavListMenu = () => {
  const isTokenValid = useCheckToken();

  const navigate = useNavigate();

  return (
    <>
      {isTokenValid ? (
        <Menu />
      ) : (
        <Button
          variant="filled"
          size="sm"
          color="deep-purple"
          onClick={() => navigate("/login")}
          className="inline-block normal-case px-3 bg-[#7126B5] hover:bg-primaryPurple hover:shadow-none"
        >
          <span className="flex items-center">
            <ArrowRightEndOnRectangleIcon className="w-6 mr-[3px]" />
            Masuk
          </span>
        </Button>
      )}
    </>
  );
};

export default NavListMenu;
