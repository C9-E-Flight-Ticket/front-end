import Homepage from "@/features/homepage/pages/Homepage";
import NotFound from "@/components/NotFound";
import { createBrowserRouter } from "react-router-dom";
import SelectFlight from "@/features/selectFlight/pages/SelectFlight";
import Transaction from "@/features/transaction/pages/TransactionPage";
import Payment from "@/features/transaction/pages/PaymentPage";
import PaymentSuccessPage from "@/features/transaction/pages/PaymentSuccessPage";
import HistoryPage from "@/features/history/pages/HistoryPage";
import HistoryNotFoundPage from "@/features/history/pages/HistoryNotFoundPage";
import NotificationPage from "@/features/notification/pages/NotificationPage";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/success",
    element: <PaymentSuccessPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/history-not-found",
    element: <HistoryNotFoundPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
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
