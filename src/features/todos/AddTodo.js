import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";
import { addTodoIntoList } from "../lists/listSlice";

import s from "./styles/AddTodo.module.css";

const AddTodo = ({ currentList }) => {
  const [todoText, setTodoText] = useState("");

  const onChange = (e) => setTodoText(e.target.value);

  const dispatch = useDispatch();

  const [currentInputColor, setCurrentInputColor] = useState("purple");
  const [colorMenuToggle, setColorMenuToggle] = useState(false);

  const currentColor = {
    green: `${s.green_rounded}`,
    blue: `${s.blue_rounded}`,
    purple: `${s.purple_rounded}`,
    trasparent: `${s.transparent_rounded}`,
  };

  const currentColorButton = {
    green: `${s.add_button_green}`,
    blue: `${s.add_button_blue}`,
    purple: `${s.add_button_purple}`,
    trasparent: `${s.add_button_transparent}`,
  };

  const colorButtonHadler = (color) => {
    setCurrentInputColor(color);
    setColorMenuToggle(!colorMenuToggle);
  };

  const todos = useSelector((state) => state.todo);
  const length = todos.length;

  return (
    <div>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (todoText.trim() === "") return;
          dispatch(addTodo(todoText, currentInputColor));
          dispatch(addTodoIntoList({ todo_id: length, list_id: currentList }));
          setTodoText("");
        }}
      >
        <input
          className={s.input}
          placeholder="What needs to be done?"
          value={todoText}
          onChange={onChange}
          type="text"
        />
        <button className={currentColorButton[currentInputColor]} type="submit">
          Add todo
        </button>

        <div
          className={
            colorMenuToggle
              ? s.transparent_rounded
              : currentColor[currentInputColor]
          }
          onClick={() => setColorMenuToggle(!colorMenuToggle)}
        >
          <div className={colorMenuToggle ? s.color_menu : s.color_menu_hidden}>
            <div
              className={s.option_green}
              onClick={() => colorButtonHadler("green")}
            ></div>
            <div
              className={s.option_blue}
              onClick={() => colorButtonHadler("blue")}
            ></div>
            <div
              className={s.option_purple}
              onClick={() => colorButtonHadler("purple")}
            ></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
