import { Menu, MenuHandler, MenuList, Button } from "@material-tailwind/react";

const SearchCityModal = ({ children, onOpen, isOpen, value }) => {
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
        <MenuList className="absolute !top-1/2 !left-1/2 !transform !-translate-x-1/2 !-translate-y-1/2 z-[999] px-0 py-0 !w-[30rem]">
          {children}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SearchCityModal;
