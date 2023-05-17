import React from "react";

function Date() {
  const color = "gray";
  return (
    <ul className="flex justify-around text-5xl font-bold gap-2 pt-5 pb-5">
      <li className="flex flex-col justify-center items-center w-100">
        <p className={`text-zinc-300`}>07</p>
        <p className={`text-zinc-300 text-xl`}>mon</p>
        <div className="h-5 w-1 bg-zinc-300"></div>
      </li>
      <li className="flex flex-col justify-center items-center w-100">
        <p className={`text-zinc-300`}>08</p>
        <p className={`text-zinc-300 text-xl`}>tue</p>
        <div className="h-5 w-1 bg-zinc-300"></div>
      </li>
      <li className="flex flex-col justify-center items-center w-100">
        <p className={``}>09</p>
        <p className={` text-xl`}>wed</p>
        <div className="h-5 w-1 bg-black"></div>
      </li>
      <li className="flex flex-col justify-center items-center w-100">
        <p className={`text-zinc-300`}>10</p>
        <p className={`text-zinc-300 text-xl`}>thu</p>
        <div className="h-5 w-1 bg-zinc-300"></div>
      </li>
      <li className="flex flex-col justify-center items-center w-100">
        <p className={`text-zinc-300`}>11</p>
        <p className={`text-zinc-300 text-xl`}>fri</p>
        <div className="h-5 w-1 bg-zinc-300"></div>
      </li>
      <li className="flex flex-col justify-center items-center w-100">
        <p className={`text-zinc-300`}>12</p>
        <p className={`text-zinc-300 text-xl`}>sat</p>
        <div className="h-5 w-1 bg-zinc-300"></div>
      </li>
      <li className="flex flex-col justify-center items-center w-100">
        <p className={`text-zinc-300`}>13</p>
        <p className={`text-zinc-300 text-xl`}>sun</p>
        <div className="h-5 w-1 bg-zinc-300"></div>
      </li>
    </ul>
  );
}

export default Date;
