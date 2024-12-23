import { addNotification } from "@/services/notificationSlice";
import io from "socket.io-client";
import Cookies from "js-cookie";
import { decodeJWT } from "@/utils/helper";

const socketMiddleware = (storeAPI) => {
  let socket;

  return (next) => (action) => {
    if (!socket) {
      socket = io("https://api.eflight.web.id");

      const access_token = Cookies.get("access_token");

      if (access_token) {
        const payload = decodeJWT(access_token);
        console.log(payload);
        socket.emit("register", payload.userId);
      }

      socket.on("transaction-notification", (notification) => {
        storeAPI.dispatch(addNotification(notification));
        console.log(notification);
      });

      socket.on("personal-notification", (notification) => {
        storeAPI.dispatch(addNotification(notification));
        console.log(notification);
      });

      // socket.on("broadcast-notification", (notification) => {
      //   storeAPI.dispatch(addNotification({ notification }));
      //   console.log(notification);
      // });
    }

    return next(action);
  };
};

export default socketMiddleware;
