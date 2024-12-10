import { Collapse } from "@material-tailwind/react";
import NavListMenu from "@/components/MainNavbar/NavListMenu";

const MobileNavCollapse = ({ openNav }) => {
  return (
    <Collapse open={openNav}>
      <div className="container mx-auto">
        <NavListMenu />
      </div>
    </Collapse>
  );
};

export default MobileNavCollapse;
