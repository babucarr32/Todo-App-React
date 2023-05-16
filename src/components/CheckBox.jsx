import React from "react";

function CheckBox({ text }) {
  let color = "white";
  return (
    <div className={`flex text-white items-center gap-2`}>
      <input type="checkbox" name="" id="" />
      <p className={`text-${color}`}>{text}</p>
    </div>
  );
}

export default CheckBox;
