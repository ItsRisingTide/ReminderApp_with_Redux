import { combineReducers } from "redux"
import counterReducer from "../features/counter/counterSlice"
import todoReducer from "../features/todos/todoSlice"
import filterReducer from "../features/filters/filtersSlice"
import colorReducer from "../features/filters/colorsSlice"
import listsReducer from "../features/lists/listSlice"

export default combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    lists: listsReducer,
    filters: filterReducer,
    colors: colorReducer,
})
