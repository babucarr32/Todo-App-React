import React, { useRef, useState, useContext } from "react";
import { ThemeContext } from "./Homepage";
import Icon from "./Icon";

function Todo() {
  const darkModeRef = useRef();
  const {
    bgColor,
    setSecondBgColor,
    setBgColor,
    fontColor,
    setFontColor,
    setDateColor,
  } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(false);
  const [flex, setFlex] = useState("");

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      setBgColor("bg-black");
      setFlex("flex justify-end");
      setSecondBgColor("bg-zinc-900");
      setDateColor("text-zinc-600");
      setFontColor("text-white");
      darkModeRef.current.src = "/assets/icons/moon.svg";
    } else {
      setFlex("flex justify-start");
      setBgColor("bg-white");
      setSecondBgColor("bg-white");
      setFontColor("text-black");
      setDateColor("text-zinc-400");
      darkModeRef.current.src = "/assets/icons/sun.svg";
    }
  };

  return (
    <div className="flex justify-between items-center text">
      <div className="text-center w-100">
        <p className={`text-5xl font-extrabold mb-5 ${fontColor}`}>
          What Do You Want TODO Today?
        </p>
      </div>
      <div
        className={`w-20 h-10 border-solid border-2 border-black rounded-full ${bgColor}  ${flex}`}
        onClick={handleDarkMode}
      >
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
