import { createSlice } from "@reduxjs/toolkit";
import exampleTodos from "./exampleTodos";

let nextTodoId = exampleTodos.length;

const todoSlice = createSlice({
  name: "todo",
  initialState: exampleTodos,
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { text, color, id } = action.payload;
        state.push({ text, id, color, completed: false });
      },
      prepare(text, color) {
        return { payload: { text, color, id: nextTodoId++ } };
      },
    },

    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
