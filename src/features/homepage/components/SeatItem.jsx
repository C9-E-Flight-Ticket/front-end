import { MenuItem } from "@material-tailwind/react";
import { forwardRef } from "react";

const SeatItem = forwardRef(function SeatItem(
  { name = "", active, setActive, price = 0 },
  ref
) {
  return (
    <>
      <div className="flex justify-center outline-none">
        <MenuItem
          onClick={() => setActive(name)}
          className={`py-4 px-4 mx-5 rounded-none flex justify-between group hover:bg-primaryPurple hover:bg-opacity-100 focus:bg-primaryPurple focus:bg-opacity-100 active:bg-primaryPurple active:bg-opacity-100 ${
            active === name && "bg-primaryPurple"
          }`}
        >
          <div className="group-hover:text-white">
            <p
              className={`text-black font-semibold mb-2 group-hover:text-white ${
                active === name && "text-white"
              }`}
            >
              {name}
            </p>
            <p
              className={`text-deep-purple-800 font-semibold group-hover:text-white ${
                active === name && "text-white"
              }`}
            >
              IDR {price.toLocaleString("id-ID", { minimumFractionDigits: 0 })}
            </p>
          </div>
          {active === name && (
            <img src="/ceklis.png" alt="ceklis" className="w-8 h-8" />
          )}
        </MenuItem>
      </div>
    </>
  );
});

export default SeatItem;
