import React from "react";
//components
import TodoList from "./TodoList";
//
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { VisibilityFilters } from "../filters/filtersSlice";
import { ColorFilters } from "../filters/colorsSlice";

const VisibleTodoList = ({ currentList }) => {
  const selectCurrentColors = (state) => state.colors;
  const selectTodo = (state) => state.todo;
  const selectFilter = (state) => state.filters;
  const selectLists = (state) => state.lists;

  //selector to get an active list
  const selectActiveList = createSelector([selectLists], (lists) => {
    return lists.filter((list) => list.id === currentList);
  });

  //selector to get from all todos those which are in active list
  const selectActiveTodos = createSelector(
    [selectTodo, selectActiveList],
    (todos, list) => {
      //just list.todo_id gets undefined since object isn't created yet soo i use this
      const ids3 = list[0].todos_id;
      return todos.filter((todo) => {
        return ids3.some((id) => id === todo.id);
      });
    }
  );

  //selector to get all todos which satisfy current filter settings
  const selectVisibleTodos = createSelector(
    [selectActiveTodos, selectFilter],
    (todos, filter) => {
      switch (filter) {
        case VisibilityFilters.SHOW_ALL:
          return todos;
        case VisibilityFilters.SHOW_COMPLETED:
          return todos.filter((todo) => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
          return todos.filter((todo) => !todo.completed);
        default:
          throw new Error("Unknown filter: " + filter);
      }
    }
  );

  //selector to get all todos which satisfy current color settings
  const selectVisibleColors = createSelector(
    [selectVisibleTodos, selectCurrentColors],
    (visibleTodos, selectedColors) => {
      return visibleTodos.filter((todo) =>
        selectedColors.includes(ColorFilters[todo.color])
      );
    }
  );

  //final list of todos
  const filteredTodos = useSelector(selectVisibleColors);

  return (
    <>
      <TodoList todos={filteredTodos} />
    </>
  );
};

export default VisibleTodoList;
