import React, { useRef, useState, useContext } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { ThemeContext } from "./Homepage";

function CheckBox({ text, todoID }) {
  const {
    updateTitle,
    updateTime,
    updateComment,
    setUpdateTitle,
    setUpdateTime,
    setUpdateComment,
    addTask,
    setAddTask,
    setUpdateTask,
    updateTask,
  } = useContext(ThemeContext);

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

  const handleEditTodo = (todoID) => {
    setAddTask(!addTask);
    setUpdateTask(!updateTask);
    setUpdateTitle("Hello World");
    setUpdateTime("12:28 a");
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
      <div className="flex justify-between w-100 items-center">
        <p className={`text-${color}`}>{text}</p>
        <Button
          btnContent={"edit"}
          buttonClick={() => handleEditTodo(todoID)}
        />
      </div>
    </div>
  );
}

export default CheckBox;
