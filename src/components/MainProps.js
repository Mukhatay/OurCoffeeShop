import React, { useState } from "react";
import SecondGroup from "./SecondGroup";
import FirstGroup from "./FirstGroup";

function MainProps() {
  const [clientCount, setClientCount] = useState(0);
  return (
    <div>
      <p>Количество клиента: {clientCount} </p>
      <button
        onClick={() => {
          setClientCount((prev) => prev + 1);
        }}
      >
        {" "}
        Click 1{" "}
      </button>
      <FirstGroup
        name={"Siko"}
        cli={clientCount}
        changFunction={setClientCount}
      />
      <SecondGroup
        name={"John"}
        secondChangeFunction={setClientCount}
      ></SecondGroup>
    </div>
  );
}

export default MainProps;
