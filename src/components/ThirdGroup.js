import React from "react";

function ThirdGroup(props) {
  return (
    <div>
      <p>Third Group</p>
      <p>Client Count Is Third Group is {props.thirdCLi}</p>

      <button
        onClick={() => {
          props.thirdChangeFunction((prev) => prev + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default ThirdGroup;
