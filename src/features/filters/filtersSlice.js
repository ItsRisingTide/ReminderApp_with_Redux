import { createSlice } from "@reduxjs/toolkit"

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE",
}

const filterSlice = createSlice({
    name: "filters",
    initialState: VisibilityFilters.SHOW_ALL,
    reducers: {
        setVisibiltyFilter(state, action) {
            return action.payload
        }
    }
})

export const { setVisibiltyFilter } = filterSlice.actions

export default filterSlice.reducer