import React, { useState } from "react";
import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";

const App = () => {
  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Header count={count} />
      <NotificationButton addNotification={addNotification} />
    </div>
  );
};

export default App;
