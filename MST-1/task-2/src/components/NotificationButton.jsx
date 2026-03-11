import React from "react";

const NotificationButton = ({ addNotification }) => {
  return (
    <button
      onClick={addNotification}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      Add Notification
    </button>
  );
};

export default NotificationButton;