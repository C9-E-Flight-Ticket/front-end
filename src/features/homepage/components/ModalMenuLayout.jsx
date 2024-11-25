import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, MenuHandler, MenuList, Button } from "@material-tailwind/react";

import { useState } from "react";

const ModalMenuLayout = ({
  children,
  value = 1,
  label = "",
  marginFromTop = 20,
  onSave,
  onMenuClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="relative w-full">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[998]"></div>
      )}
      <Menu
        dismiss={{ outsidePress: false }}
        placement="bottom-start"
        handler={handleMenuOpen}
        open={isOpen}
      >
        <p htmlFor="input" className="text-textGrey text-sm">
          {label}
        </p>
        <MenuHandler>
          <Button
            id="input"
            variant="text"
            fullWidth
            className="text-start text-sm font-semibold px-0 hover:bg-transparent active:bg-transparent border-b rounded-none border-blue-gray-200 normal-case focus:outline-none focus:ring-0 transition-none"
            ripple={false}
          >
            {value}
          </Button>
        </MenuHandler>
        <MenuList className="z-[999] px-0 py-0 !w-[27rem]">
          <div className="w-full p-2 flex justify-end outline-none">
            <XMarkIcon
              className="w-6 h-6 text-black hover:cursor-pointer"
              onClick={() => {
                handleMenuOpen();
                onMenuClose();
              }}
            />
          </div>
          <hr
            className={cn(
              "mt-1 border-t-borderGrey border-t-2 outline-none",
              `mb-[${marginFromTop}px]`
            )}
          />
          {children}
          <div className="my-3 outline-none mx-4 flex justify-end">
            <Button
              variant="filled"
              color="deep-purple"
              className="normal-case bg-primaryPurple"
              onClick={() => {
                onSave();
                setIsOpen(false);
              }}
            >
              Simpan
            </Button>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ModalMenuLayout;
