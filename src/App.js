import React from "react";

import "./App.css";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontsize: "500%",
        position: "absolute",
        width: "100%",
        height: "120%",
        top: "-16%",
      }}
    >
      counter
      <div
        style={{
          position: "relative",
          fontSize: "120%",
          top: "10vh",
        }}
      >
        {counter}
      </div>
      <div className="sahil">
        <button
          style={{
            fontSize: "100%",
            position: "relative",
            top: "20vh",
            backgroundColor: "green",
            borderRadius: "20%",
            marginRight: "5%",
            color: "red",
          }}
          onClick={() => handleClick1()}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "100%",
            position: "relative",
            top: "20vh",
            background: "red",
            borderRadius: "20%",
            marginRight: "5%",
            color: "green",
          }}
          onClick={() => handleClick2()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
