import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseOver, setmouseOver] = useState(false);
  function headerSetter() {
    setHeadingText("submitted");
  }

  function handleMouseOver() {
    setmouseOver(true);
  }

  function handleMouseOut() {
    setmouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={headerSetter}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
