import React from "react";

function CheckBox({ text }) {
  return (
    <div className={`flex text-white items-center gap-2`}>
      <input type="checkbox" name="" id="" />
      <p>{text}</p>
    </div>
  );
}

export default CheckBox;
