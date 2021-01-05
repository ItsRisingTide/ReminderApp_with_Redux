import React from 'react'
import { setVisibiltyFilter } from './filtersSlice'
import { useSelector, useDispatch } from "react-redux"

import "./styles/Footer.css"

const FilterLink = ({ filter, children }) => {

    const activeFilter = useSelector(state => state.filters)
    const dispatch = useDispatch()

    console.log(`Active Filter : ${activeFilter} `)
    console.log(`Passing Filter : ${filter} `)

    return (
        <>
            <button className="footer_button"
                disabled={activeFilter === filter}
                onClick={() => dispatch(setVisibiltyFilter(filter))}>
                {children}
            </button>
        </>
    )
}

export default FilterLink