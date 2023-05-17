import React, { useRef, useState } from "react";
import Icon from "./Icon";

function Todo({
  changeToDarkMode,
  setChangeToDarkMode,
  setSecChangeToDarkMode,
}) {
  const darkModeRef = useRef();
  const [darkMode, setDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");
  const [flex, setFlex] = useState("");

  const handleDarkMode = () => {
    console.log("clicked");
    setDarkMode(!darkMode);
    if (!darkMode) {
      setBgColor("bg-black");
      setFlex("flex justify-end");
      setChangeToDarkMode("black");
      setSecChangeToDarkMode("bg-zinc-900");
      darkModeRef.current.src = "/assets/icons/moon.svg";
    } else {
      setFlex("flex justify-start");
      setBgColor("bg-white");
      setChangeToDarkMode("white");
      setSecChangeToDarkMode("white");
      darkModeRef.current.src = "/assets/icons/sun.svg";
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="text-center w-100">
        <p className="text-5xl font-extrabold mb-5">
          What Do You Want TODO Today?
        </p>
      </div>
      <div
        className={`w-20 h-10 border-solid border-2 border-black rounded-full ${bgColor}  ${flex}`}
        onClick={handleDarkMode}
      >
        {/* <img className="" src="/assets/icons/sun.svg" alt="" srcset="" /> */}
        <Icon
          width={"w-7"}
          height={"h-7"}
          src={"/assets/icons/sun.svg"}
          refs={darkModeRef}
        />
      </div>
    </div>
  );
}

export default Todo;
