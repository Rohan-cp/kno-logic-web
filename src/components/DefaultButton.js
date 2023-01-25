import React, { useState } from "react";

const DefaultButton = (props) => {
  const [bgColor, setBgColour] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [borderColor, setBorderColor] = useState("white");
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "25px",
        borderWidth: 1.5,
        borderColor: borderColor,
        borderStyle: "solid",
        width: 208,
        height: 58,
        cursor: "pointer",
        ...props.style
      }}
      onMouseEnter={() => {
        setBgColour("#6E44FF");
        setTextColor("white");
        setBorderColor("#6E44FF");
      }}
      onMouseLeave={() => {
        setBgColour("black");
        setTextColor("white");
        setBorderColor("white");
      }}
    >
      {props.children}
    </button>
  );
};

export default DefaultButton;
