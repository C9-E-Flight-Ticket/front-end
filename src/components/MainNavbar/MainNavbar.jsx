import { Navbar, Typography } from "@material-tailwind/react";

import NavListMenu from "@/components/MainNavbar/NavListMenu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MainNavbar = () => {
  return (
    <Navbar fullWidth className="py-2 flex justify-center">
      <div className="w-full lg:mx-20 flex items-center justify-between text-blue-gray-900">
        <div className="flex lg:w-[35rem] gap-4 items-center">
          <Typography className="mr-4 py-1.5 font-medium">
            <img src="/logo.png" alt="Logo" className="w-28" />
          </Typography>
          <div className="relative w-full flex items-center">
            <input
              className="w-full bg-gray-200 placeholder:text-gray-400 text-gray-700 text-sm border border-gray-200 rounded-md pr-10 pl-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300 shadow-sm focus:shadow"
              placeholder="Cari di sini..."
            />
            <MagnifyingGlassIcon className="absolute w-5 h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </div>
        </div>
        <NavListMenu />
      </div>
    </Navbar>
  );
};

export default MainNavbar;
