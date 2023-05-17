import React from "react";
import CheckBox from "./CheckBox";

function SideCard() {
  let color = "white";
  return (
    <>
      <div className={`flex flex-col bg-gray p-3 rounded-xl bg-gray mb-3`}>
        <div className="flex justify-between items-center">
          <h3 className={`text-pink-200`}>This week</h3>
          <p className="text-white">-</p>
        </div>
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
