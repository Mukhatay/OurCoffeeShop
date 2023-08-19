import React, { useState } from "react";

function FilterButtons({ arrayButton, setArrayButton }) {
  return (
    <div>
      <button
        style={
          arrayButton.findIndex((item) => item === "Brazil") !== -1
            ? { fontWeight: "700" }
            : {}
        }
        onClick={() => {
          const indexFind = arrayButton.findIndex((item) => item === "Brazil");
          console.log(indexFind);
          if (indexFind === -1) {
            setArrayButton([...arrayButton, "Brazil"]);
          } else {
            setArrayButton([
              ...arrayButton.slice(0, indexFind),
              ...arrayButton.slice(indexFind + 1),
            ]);
          }
        }}
      >
        Brazil
      </button>
      <button
        style={
          arrayButton.findIndex((item) => item === "Kenya") !== -1
            ? { fontWeight: "700" }
            : {}
        }
        onClick={() => {
          const indexFind = arrayButton.findIndex((item) => item === "Kenya");
          console.log(indexFind);
          if (indexFind === -1) {
            setArrayButton([...arrayButton, "Kenya"]);
          } else {
            setArrayButton([
              ...arrayButton.slice(0, indexFind),
              ...arrayButton.slice(indexFind + 1),
            ]);
          }
        }}
      >
        Kenya
      </button>
      <button
        style={
          arrayButton.findIndex((item) => item === "Columbia") !== -1
            ? { fontWeight: "700" }
            : {}
        }
        onClick={() => {
          const indexFind = arrayButton.findIndex(
            (item) => item === "Columbia"
          );
          console.log(indexFind);
          if (indexFind === -1) {
            setArrayButton([...arrayButton, "Columbia"]);
          } else {
            setArrayButton([
              ...arrayButton.slice(0, indexFind),
              ...arrayButton.slice(indexFind + 1),
            ]);
          }
        }}
      >
        Columbia
      </button>
    </div>
  );
}

export default FilterButtons;
