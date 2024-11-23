import {
  BellIcon,
  ListBulletIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const Menu = () => {
  return (
    <ul className="mt-2 mb-4 flex gap-2 lg:mb-0 lg:mt-0 items-center lg:gap-3">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-1 p-1 font-medium"
      >
        <ListBulletIcon className="w-5" />
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-1 p-1 font-medium"
      >
        <UserIcon className="w-5" />
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-1 p-1 font-medium"
      >
        <BellIcon className="w-5" />
      </Typography>
    </ul>
  );
};

export default Menu;
