import { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { CubeIcon, HeartIcon } from "@heroicons/react/24/outline";
import DollarIcon from "/icon-dollar.png";

const FilterCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-12 right-2 lg:hidden bg-white z-40 h-8 border border-[#A06ECE] text-[#7126B5] rounded-2xl px-7 "
      >
        Filter
      </button>

      <div className="hidden lg:block lg:px-12">
        <Card
          className="absolute w-[268px] h-[248px] shadow border bg-white opacity-100 rounded-tl-lg z-40"
          style={{ padding: "24px 0 0 0", gap: "24px" }}
        >
          <CardBody className="p-0">
            <Typography variant="h6" className="mb-4 text-gray-800 px-8">
              Filter
            </Typography>
            <List>
              <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100 border-b border-gray-200">
                <CubeIcon className="h-6 w-6 text-gray-600" />
                <Typography className="flex-1 text-black">Transit</Typography>
                <span className="text-gray-400 group-hover:text-black">
                  {">"}
                </span>
              </ListItem>
              <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100 border-b border-gray-200">
                <HeartIcon className="h-6 w-6 text-gray-600" />
                <Typography className="flex-1 text-black">Fasilitas</Typography>
                <span className="text-gray-400 group-hover:text-black">
                  {">"}
                </span>
              </ListItem>
              <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100 rounded-b-lg">
                <img src={DollarIcon} alt="Dollar Icon" className="h-6 w-6" />
                <Typography className="flex-1 text-black">Harga</Typography>
                <span className="text-gray-400 group-hover:text-black">
                  {">"}
                </span>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </div>

      <Dialog open={open} handler={handleOpen} className="rounded-lg lg:hidden">
        <DialogHeader>
          <Typography variant="h6" className="text-gray-800">
            Filter
          </Typography>
        </DialogHeader>
        <DialogBody>
          <List>
            <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100 border-b border-gray-200">
              <CubeIcon className="h-6 w-6 text-gray-600" />
              <Typography className="flex-1 text-black">Transit</Typography>
            </ListItem>
            <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100 border-b border-gray-200">
              <HeartIcon className="h-6 w-6 text-gray-600" />
              <Typography className="flex-1 text-black">Fasilitas</Typography>
            </ListItem>
            <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100">
              <img src={DollarIcon} alt="Dollar Icon" className="h-6 w-6" />
              <Typography className="flex-1 text-black">Harga</Typography>
            </ListItem>
          </List>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen}>
            Tutup
          </Button>
          <Button variant="gradient" color="purple" onClick={handleOpen}>
            Terapkan
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default FilterCard;
