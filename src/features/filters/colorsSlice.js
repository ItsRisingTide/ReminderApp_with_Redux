import { createSlice } from "@reduxjs/toolkit"

export const ColorFilters = {
    green: "#7fd125",
    blue: "#4b8fdf",
    purple: "#8f13fd",
}

const exampleInitialState = [
    "#7fd125",
    "#8f13fd",
]

const colorSlice = createSlice({
    name: "colors",
    initialState: exampleInitialState,
    reducers: {
        toggleColorFilter(state, action) {
            if (!state.includes(action.payload))
                state.push(action.payload)
            else
                return state.filter((color) => color !== action.payload)

        },
    }
})


export const { toggleColorFilter } = colorSlice.actions

export default colorSlice.reducer