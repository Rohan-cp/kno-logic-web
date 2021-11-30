import React from "react";

const DefaultButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: "#5CA0FF",
        border: "none",
        color: "black",
        borderRadius: "25px",
        width: 208,
        height: 58
      }}
    >
      {props.children}
    </button>
  );
};

export default DefaultButton;
