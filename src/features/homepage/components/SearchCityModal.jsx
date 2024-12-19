import { Menu, MenuHandler, MenuList, Button } from "@material-tailwind/react";
import { useEffect } from "react";

const SearchCityModal = ({ children, onOpen, isOpen, value }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div className="relative w-full">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[998]"></div>
      )}
      <Menu dismiss={{ outsidePress: false }} handler={onOpen} open={isOpen}>
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
        <MenuList className="fixed !top-1/2 !left-1/2 !transform !-translate-x-1/2 !-translate-y-1/2 z-[999] px-0 py-0 w-[20rem] sm:w-[30rem]">
          {children}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SearchCityModal;
