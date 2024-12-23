import { removeNotification } from "@/services/slices/notificationSlice";
import { useDispatch, useSelector } from "react-redux";

const NotificationDropdown = () => {
  const { notifications } = useSelector((state) => state.notification);

  const dispatch = useDispatch();

  const dismissNotification = (id) => {
    dispatch(removeNotification(id));
  };

  return (
    <div className="relative">
      <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-[99]">
        {notifications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notif) => (
              <li
                key={notif.id || 1}
                className="flex justify-between items-start p-4 hover:bg-gray-100 hover:cursor-pointer"
              >
                <div className="w-5/6">
                  <h4 className="font-semibold text-sm text-gray-800">
                    {notif.title}
                  </h4>
                  <p className="text-xs text-gray-700 whitespace-normal break-words">
                    {notif.message}
                  </p>
                </div>
                <button
                  onClick={() => dismissNotification(notif.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-4 text-gray-500 text-sm text-center">
            No new notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;
