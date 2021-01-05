import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { toggleColorFilter } from "./colorsSlice"
import s from "./styles/ColorLink.module.css"

const ColorLink = ({ color, colorname }) => {

    const activeColors = useSelector(state => state.colors)
    const dispatch = useDispatch()

    console.log(`Active ColorFilter : ${activeColors} `)
    console.log(`Color : ${color}`)

    const isColorActive = activeColors.includes(color)
    console.log(`Is color active : ${isColorActive} `)

    const colorTable = {
        green: `${s.green}`,
        blue: `${s.blue}`,
        purple: `${s.purple}`,
    }

    const colorTableClick = {
        green: `${s.green_clicked}`,
        blue: `${s.blue_clicked}`,
        purple: `${s.purple_clicked}`,
    }

    return (
        <>
            <div className={isColorActive ? colorTableClick[`${colorname}`]
                : colorTable[`${colorname}`]}
                // style={{
                //     border: isColorActive ? '2px solid black' : '',
                // }}
                onClick={() => {
                    dispatch(toggleColorFilter(color))
                }}
            >
            </div>
        </>
    )
}

export default ColorLink