import React from "react";

const Header = ({ count }) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Notification System</h1>
      <h2>23BDA70124 | MST-1 | Aditya Vardhan Singh</h2>
      <h3>Total Notifications: {count}</h3>
    </div>
  );
};

export default Header;