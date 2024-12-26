import { Navbar, Typography } from "@material-tailwind/react";

const OtpHeader = () => {
  return (
    <Navbar
      fullWidth
      className="py-2 flex justify-center mb-10 fixed top-0 z-[9999] bg-white bg-opacity-100"
    >
      <div className="w-full lg:mx-20 flex items-center justify-between text-blue-gray-900">
        <div className="flex lg:w-[35rem] gap-4 items-center">
          <Typography className="mr-4 py-1.5 font-medium">
            <img src="/logo.png" alt="Logo" className="w-[4.2rem]" />
          </Typography>
        </div>
      </div>
    </Navbar>
  );
};

export default OtpHeader;
