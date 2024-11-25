import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { forwardRef } from "react";

const PassengerItem = forwardRef(function PassengerItem(
  { img, title, id, description, setTempPassenger, tempPassenger },
  ref
) {
  function handleIncrement() {
    setTempPassenger((state) => ({ ...state, [id]: tempPassenger[id] + 1 }));
  }
  function handleDecrement() {
    if (tempPassenger[id] === 0) return;
    setTempPassenger((state) => ({ ...state, [id]: tempPassenger[id] - 1 }));
  }
  return (
    <>
      <div className="grid grid-cols-[40px,1fr,1fr] outline-none mx-5 items-center">
        <img src={img} className="w-6 h-6 self-start mt-2" alt="passenger" />
        <div className="flex flex-col">
          <Typography as={"h4"} className="font-bold text-black">
            {title}
          </Typography>
          <p className="text-textGrey">({description})</p>
        </div>
        <div className="flex gap-1 justify-end">
          <div
            className="flex justify-center items-center"
            onClick={handleDecrement}
          >
            <Button
              variant="outlined"
              color="deep-purple"
              className="p-2 border-[1.5px]"
              disabled={tempPassenger[id] === 0}
            >
              <MinusIcon className="w-6" />
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Button
              variant="outlined"
              color="deep-purple"
              className="disabled:opacity-100 border-borderGrey text-black p-2 w-11 h-11 border-[1.5px]"
              disabled
            >
              {tempPassenger[id]}
            </Button>
          </div>
          <div
            className="flex justify-center items-center"
            onClick={handleIncrement}
          >
            <Button
              variant="outlined"
              color="deep-purple"
              className="p-2 border-[1.5px]"
            >
              <PlusIcon className="w-6" />
            </Button>
          </div>
        </div>
      </div>
      <hr className="my-3 mx-5 py border-t-borderGrey outline-none" />
    </>
  );
});
export default PassengerItem;
