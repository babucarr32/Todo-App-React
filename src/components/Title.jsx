import React from "react";

function Title({ fontColor }) {
  return (
    <p className={`font-bold text-2xl underline mb-5 ${fontColor}`}>
      Add A TODO
    </p>
  );
}

export default Title;
