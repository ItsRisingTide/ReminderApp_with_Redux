import { createSlice } from "@reduxjs/toolkit";
import exampleList from "./exampleList";

let nextListId = exampleList.length;

const listSlice = createSlice({
  name: "list",
  initialState: exampleList,
  reducers: {
    addList: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            name: name,
            id: nextListId++,
            todos_id: [],
          },
        };
      },
    },

    deleteList(state, action) {
      const id = action.payload;
      return state.filter((list) => list.id !== id);
    },

    addTodoIntoList(state, action) {
      const { todo_id, list_id } = action.payload;
      const list = state.filter((list) => list.id === list_id);
      list[0].todos_id.push(todo_id);
    },
  },
});

export const { addList, deleteList, addTodoIntoList } = listSlice.actions;

export default listSlice.reducer;
