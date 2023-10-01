import React from "react";
import MainProps from "./MainProps";

function FirstGroup(props) {
  return (
    <div>
      <p>FirstGroup</p>
      <p>Client Count: {props.cli} </p>
      <button
        onClick={() => {
          props.changFunction((prev) => prev + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default FirstGroup;
