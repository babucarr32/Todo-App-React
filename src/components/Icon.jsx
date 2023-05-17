import React, { useRef, useState } from "react";

function Icon({ src, height, width, bg }) {
  const checkBoxRef = useRef();
  const [checked, setChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setChecked(!checked);
    if (!checked) {
      checkBoxRef.current.src = "/assets/icons/checked.svg";
    } else {
      checkBoxRef.current.src = "/assets/icons/unchecked.svg";
    }
  };
  return (
    <div
      className={`rounded-full ${bg} w-10 h-10 flex justify-center items-center`}
    >
      <img
        onClick={handleCheckBoxClick}
        className={`${width} ${height} `}
        src={src}
        alt=""
        ref={checkBoxRef}
      />
    </div>
  );
}

export default Icon;
