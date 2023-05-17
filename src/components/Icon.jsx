import React, { forwardRef } from "react";

const Icon = forwardRef(function Icon({
  src,
  height,
  width,
  bg,
  handleClick,
  refs,
}) {
  return (
    <div
      className={`rounded-full ${bg} w-10 h-10 flex justify-center items-center`}
    >
      <img
        onClick={handleClick ? handleClick : null}
        className={`${width} ${height} `}
        src={src}
        alt=""
        ref={refs}
      />
    </div>
  );
});

export default Icon;
