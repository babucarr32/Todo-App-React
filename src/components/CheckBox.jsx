import React, { useRef, useState } from "react";
import Icon from "./Icon";

function CheckBox({ text }) {
  const checkBoxRef = useRef();
  const [checked, setChecked] = useState(false);

  let color = "white";
  const handleCheckBoxClick = () => {
    setChecked(!checked);
    if (!checked) {
      checkBoxRef.current.src = "/assets/icons/checked.svg";
    } else {
      checkBoxRef.current.src = "/assets/icons/unchecked.svg";
    }
  };
  return (
    <div className={`flex text-white items-center`}>
      <Icon
        src={"/assets/icons/unchecked.svg"}
        width={"h-4"}
        height={"h-4"}
        handleClick={handleCheckBoxClick}
        refs={checkBoxRef}
      />
      <p className={`text-${color}`}>{text}</p>
    </div>
  );
}

export default CheckBox;
