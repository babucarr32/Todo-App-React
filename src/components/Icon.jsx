import React from "react";

function Icon({ src, height, width, bg }) {
  return (
    <div
      className={`rounded-full ${bg} w-10 h-10 flex justify-center items-center`}
    >
      <img className={`${width} ${height} `} src={src} alt="" srcset="" />
    </div>
  );
}

export default Icon;
