import { ReactComponent as Logo } from "../../img/add_icon3.svg";
import s from "./styles/AddList.module.css";

import { useDispatch } from "react-redux";
import { addList } from "./listSlice";

import React, { useState } from "react";

const AddList = () => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className={s.s}>
      <div className={isClicked ? s.container : s.container_hidden}>
        <div className={s.button}>
          <div className={s.text}>Add list</div>
          <div className={s.icon_container}>
            <Logo
              className={isClicked ? s.icon_rotated : s.icon}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        </div>

        <input
          placeholder="Enter list name"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if (input.trim() === "") {
                console.log("empty input");
              } else {
                dispatch(addList(input));
              }
            }
          }}
          className={s.input}
        ></input>
      </div>
    </div>
  );
};

export default AddList;
