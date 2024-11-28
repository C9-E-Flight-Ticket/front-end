import Homepage from "@/features/homepage/pages/Homepage";
import NotFound from "@/components/NotFound";
import { createBrowserRouter } from "react-router-dom";
import SelectFlight from "@/features/selectflight//pages/SelectFlight";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/flight",
    element: <SelectFlight />,
  },
];

const router = createBrowserRouter(routes);

export default router;
