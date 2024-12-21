import { addNotification } from "@/services/notificationSlice";
import io from "socket.io-client";

const socketMiddleware = (storeAPI) => {
  let socket;

  return (next) => (action) => {
    if (!socket) {
      socket = io("https://api.eflight.web.id");
      console.log("connect");

      socket.on("transaction-notification", (notification) => {
        storeAPI.dispatch(addNotification(notification));
        console.log(notification);
      });

      socket.on("personal-notification", (notification) => {
        storeAPI.dispatch(addNotification(notification));
        console.log(notification);
      });

      socket.on("broadcast-notification", (notification) => {
        storeAPI.dispatch(addNotification(notification));
        console.log(notification);
      });
    }

    return next(action);
  };
};

export default socketMiddleware;
