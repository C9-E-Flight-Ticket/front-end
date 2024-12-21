import { useState } from "react";

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Comment Notification",
      message:
        "New comment on your post. This is a longer message that spans multiple lines to demonstrate wrapping behavior.",
    },
    {
      id: 2,
      title: "Profile Update",
      message:
        "Your profile was updated successfully. Check your profile section for more details.",
    },
    {
      id: 3,
      title: "Friend Request",
      message:
        "John Doe has sent you a friend request. You can accept or decline it from the friends section.",
    },
  ]);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="relative">
      <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg">
        {notifications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className="flex justify-between items-start p-4 hover:bg-gray-100"
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
