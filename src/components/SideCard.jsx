import React, { useContext, useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import Icon from "./Icon";
import { ThemeContext } from "./Homepage";

function SideCard() {
  const [getTodoData, setGetTodoData] = useState([]);
  const { addTask, setAddTask } = useContext(ThemeContext);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, [addTask]);

  const handleAddTaskFunc = () => {
    setAddTask(!addTask);
  };

  return (
    <>
      <div className={`flex flex-col p-3 rounded-xl bg-gray mb-3`}>
        <div className="flex justify-between items-center">
          <h3 className={`text-pink-200`}>This week</h3>
          <p className="text-white">-</p>
        </div>
        {getTodoData.map((todo) => (
          <>
            <CheckBox text={todo.title} todoID={todo.id} />
          </>
        ))}
        <div className="w-100 flex justify-end">
          <Icon
            src="/assets/icons/plus.svg"
            width={"w-5"}
            height={"h-5"}
            handleClick={handleAddTaskFunc}
          />
        </div>
      </div>
    </>
  );
}

export default SideCard;
