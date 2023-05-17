import React from "react";
import Icon from "./Icon";

function CheckBox({ text }) {
  let color = "white";
  return (
    <div className={`flex text-white items-center`}>
      {/* <input type="checkbox" name="" id="" /> */}
      <Icon src={"/assets/icons/unchecked.svg"} width={"h-4"} height={"h-4"} />
      <p className={`text-${color}`}>{text}</p>
    </div>
  );
}

export default CheckBox;
