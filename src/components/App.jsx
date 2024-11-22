import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  setInterval(updateTime, 1000);

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
