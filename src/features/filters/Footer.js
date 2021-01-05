import React from 'react'
import { VisibilityFilters } from "./filtersSlice"
import { ColorFilters } from "./colorsSlice"

import FilterLink from "./FilterLink"
import ColorLink from "./ColorLink"

import "./styles/Footer.css"

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer_filters">
        <span className="footer_text">Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      </div>
      <div className="footer_colors">
        <span className="footer_text2">Colors: </span>
        <ColorLink color={ColorFilters.green} colorname="green" />
        <ColorLink color={ColorFilters.blue} colorname="blue" />
        <ColorLink color={ColorFilters.purple} colorname="purple" />
      </div>
    </div>
  )
}

export default Footer;