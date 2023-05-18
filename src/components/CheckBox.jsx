import React, { useRef, useState, useContext, useEffect } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { ThemeContext } from "./Homepage";

function CheckBox({ text, todoID, getTodoData, setGetTodoData }) {
  const {
    setUpdateTitle,
    setUpdateTime,
    addTask,
    setAddTask,
    setUpdateTask,
    updateTask,
    setGetPropId,
    rerender,
    setRerender,
    seGetTodoChart,
  } = useContext(ThemeContext);

  const checkBoxRef = useRef();

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, [addTask]);
  todoID;

  const handleCheckBoxClick = (todoID) => {
    const delTodo = getTodoData.filter((todo) => todo.id !== todoID);
    localStorage.setItem("TODO", JSON.stringify(delTodo));
    //  Update the task and Todo/Chart
    setGetTodoData(delTodo);
    seGetTodoChart(delTodo);
    // Call useEffect and update the LS
    setRerender(!rerender);
  };

  const handleEditTodo = (todoID) => {
    const findTodoToUpdate = getTodoData.find((todo) => todo.id == todoID);
    setGetPropId(todoID);
    // Show Or Hide the create TODO
    setAddTask(!addTask);
    // If true update button will show
    setUpdateTask(!updateTask);
    // To assign values to the inputs of the Modal (AddTask.jsx)
    setUpdateTitle(findTodoToUpdate.title);
    setUpdateTime(findTodoToUpdate.time);
  };
  return (
    <div className={`flex text-white items-center`}>
      <Icon
        src={"/assets/icons/bin.svg"}
        width={"h-4"}
        height={"h-4"}
        handleClick={() => handleCheckBoxClick(todoID)}
        refs={checkBoxRef}
      />
      <div className="flex justify-between w-100 items-center">
        <p className={`text-white`}>{text}</p>
        <Button
          btnContent={"edit"}
          buttonClick={() => handleEditTodo(todoID)}
        />
      </div>
    </div>
  );
}

export default CheckBox;
