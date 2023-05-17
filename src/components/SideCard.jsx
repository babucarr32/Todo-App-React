import React, { useContext } from "react";
import CheckBox from "./CheckBox";
import Icon from "./Icon";

function SideCard() {
  const handleAddTaskFunc = () => {
    console.log("Add task");
  };

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
        <div className="w-100 flex justify-end">
          <Icon
            src="/assets/icons/plus.svg"
            width={"w-5"}
            height={"h-5"}
            handleClick={handleAddTaskFunc}
          />
        </div>
      </div>
    </>
  );
}

export default SideCard;
