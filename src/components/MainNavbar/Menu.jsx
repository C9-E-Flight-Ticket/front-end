import {
  BellIcon,
  ListBulletIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const active = (path) => location.pathname === path;

  return (
    <ul className="mt-2 mb-4 flex gap-2 lg:mb-0 lg:mt-0 items-center lg:gap-3">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-1 p-1 font-medium"
      >
        <ListBulletIcon
          className={`w-5 hover:text-deep-purple-600 hover:cursor-pointer transform hover:scale-125 ${
            active("/history") && "text-deep-purple-600"
          }`}
          onClick={() => navigate("/history")}
        />
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-1 p-1 font-medium"
      >
        <UserIcon
          className={`w-5 hover:text-deep-purple-600 hover:cursor-pointer transform hover:scale-125 ${
            active("/account") && "text-deep-purple-600"
          }`}
          onClick={() => navigate("/account")}
        />
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-1 p-1 font-medium"
      >
        <BellIcon
          className={`w-5 hover:text-deep-purple-600 hover:cursor-pointer transform hover:scale-125 ${
            active("/notification") && "text-deep-purple-600"
          }`}
          onClick={() => navigate("/notification")}
        />
      </Typography>
    </ul>
  );
};

export default Menu;
