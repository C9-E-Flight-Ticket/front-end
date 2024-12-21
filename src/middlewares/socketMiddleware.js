import { addNotification } from "@/services/notificationSlice";
import io from "socket.io-client";

const socketMiddleware = (storeAPI) => {
  let socket;

  return (next) => (action) => {
    if (!socket) {
      socket = io("https://api.eflight.web.id");

      socket.on("transaction-notification", (notif) => {
        storeAPI.dispatch(addNotification(notif));
      });

      socket.on("personal-notification", (notif) => {
        storeAPI.dispatch(addNotification(notif));
      });

      socket.on("broadcast-notification", (notif) => {
        storeAPI.dispatch(addNotification(notif));
      });
    }

    return next(action);
  };
};

export default socketMiddleware;
