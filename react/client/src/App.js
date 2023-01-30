import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:3001");

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("data", (receivedData) => {
      setData([...data, receivedData]);
    });

    return () => {
      socket.disconnect();
    };
  }, [data]);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
