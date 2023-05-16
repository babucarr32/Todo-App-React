import React from "react";
import CheckBox from "./CheckBox";

function SideCard() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className={`text-pink-200`}>This week</h3>
        <p className="text-white">-</p>
      </div>
      <div className="flex flex-col gap-3 bg-slate-700 p-3 rounded-xl">
        <CheckBox text={"Design onbording"} />
        <CheckBox text={"Design onbording"} />
        <CheckBox text={"Design onbording"} />
        <CheckBox text={"Design onbording"} />
        <CheckBox text={"Design onbording"} />
      </div>
    </>
  );
}

export default SideCard;
