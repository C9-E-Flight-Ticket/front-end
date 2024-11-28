import React from "react";
import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { CubeIcon, HeartIcon } from "@heroicons/react/24/outline";

import DollarIcon from "/icon-dollar.png";

const FilterCard = () => {
  return (
    <Card
      className="absolute top-[410px] left-[260px] w-[268px] h-[248px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] bg-white opacity-100 rounded-tl-lg"
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
            <span className="text-gray-400 group-hover:text-black">{">"}</span>
          </ListItem>
          <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100 border-b border-gray-200">
            <HeartIcon className="h-6 w-6 text-gray-600" />
            <Typography className="flex-1 text-black">Fasilitas</Typography>
            <span className="text-gray-400 group-hover:text-black">{">"}</span>
          </ListItem>
          <ListItem className="group flex items-center gap-4 px-6 py-2 hover:bg-gray-100 rounded-b-lg">
            <img src={DollarIcon} alt="Dollar Icon" className="h-6 w-6" />
            <Typography className="flex-1 text-black">Harga</Typography>
            <span className="text-gray-400 group-hover:text-black">{">"}</span>
          </ListItem>
        </List>
      </CardBody>
    </Card>
  );
};

export default FilterCard;
