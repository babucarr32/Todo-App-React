import React from "react";
import ImageComp from "./ImageComp";
import Icon from "./Icon";

function SideThin() {
  return (
    <div className="bg-gray p-2 flex flex-col gap-3">
      <Icon src={"/assets/icons/category.svg"} width={10} height={10} bg="" />
      <ImageComp />
      <ImageComp />
      <ImageComp />
      <Icon src={"/assets/icons/eight.svg"} width={8} height={8} />
      <Icon
        src={"/assets/icons/plus.svg"}
        width={3}
        height={3}
        bg={"bg-black"}
      />
    </div>
  );
}

export default SideThin;
