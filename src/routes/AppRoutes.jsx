import { createBrowserRouter } from "react-router-dom";
import Homepage from "@/features/homepage/pages/Homepage";
import NotFound from "@/components/NotFound";
import SelectFlight from "@/features/selectFlight/pages/SelectFlight";
import Transaction from "@/features/transaction/pages/TransactionPage";
import Payment from "@/features/transaction/pages/PaymentPage";
import PaymentSuccessPage from "@/features/transaction/pages/PaymentSuccessPage";
import HistoryPage from "@/features/history/pages/HistoryPage";
import HistoryNotFoundPage from "@/features/history/pages/HistoryNotFoundPage";
import NotificationPage from "@/features/notification/pages/NotificationPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import OTPPage from "@/features/auth/pages/OTPPage";
import AccountPage from "@/features/account/pages/AccountPage";
import Login from "@/features/auth/pages/Login";
import ProtectedRoute from "@/utils/ProtectedRoute";
import ResetPassword from "@/features/auth/pages/resetPassword";

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
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>
    ),
  },
  {
    path: "/success",
    element: (
      <ProtectedRoute>
        <PaymentSuccessPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/history",
    element: (
      <ProtectedRoute>
        <HistoryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/history-not-found",
    element: <HistoryNotFoundPage />,
  },
  {
    path: "/notification",
    element: (
      <ProtectedRoute>
        <NotificationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <AccountPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/flight",
    element: <SelectFlight />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/otp",
    element: <OTPPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
