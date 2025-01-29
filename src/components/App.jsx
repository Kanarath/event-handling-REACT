import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello!");
  const [isButtonHover, setMouseHover] = useState(false);
  function handleClick() {
    setHeadingText("Submitted!");
  }
  function hoverButton() {
    setMouseHover(true);
  }
  function hoverButtonOut() {
    setMouseHover(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={hoverButton}
        onMouseOut={hoverButtonOut}
        style={{ backgroundColor: isButtonHover ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
