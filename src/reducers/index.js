import { combineReducers } from "redux"
import counterReducer from "../features/counter/counterSlice"
import todoReducer from "../features/todos/todoSlice"
import filterReducer from "../features/filters/filtersSlice"

export default combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    filters: filterReducer,
})
