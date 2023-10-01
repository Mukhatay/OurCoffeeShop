import React from "react";
import ThirdGroup from "./ThirdGroup";

function SecondGroup(props) {
  return (
    <div>
      <p>Second Group {props.name}</p>
      <p>Client Count Is Second Group is {props.cli}</p>

      <ThirdGroup
        name={props.name}
        thirdChangeFunction={props.secondChangeFunction}
      />
    </div>
  );
}

export default SecondGroup;
