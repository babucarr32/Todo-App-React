import React from "react";
import ImageComp from "./ImageComp";
import Icon from "./Icon";

function SideThin() {
  return (
    <div className="bg-gray p-2 flex flex-col gap-3">
      <Icon
        src={"/assets/icons/category.svg"}
        width={"h-10"}
        height={"w-10"}
        bg=""
      />
      <ImageComp />
      <ImageComp />
      <ImageComp />
      <Icon src={"/assets/icons/eight.svg"} width={"h-10"} height={"w-10"} />
      <Icon
        src={"/assets/icons/plus.svg"}
        width={"w-3"}
        height={"h-3"}
        bg={"bg-black"}
      />
    </div>
  );
}

export default SideThin;
