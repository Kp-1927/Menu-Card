import "./MenuCard.css"
import React from 'react'
import MenuCardData from "./MenuCardData"
import { NavLink } from "react-router-dom"
const MenuCard = (props) => {
  return (
    <div className="menu-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className="title">{props.title}</h2>
                <div className="details">
                    <p>{props.text}</p>
                </div>
                <div className="menu-btn">
                        <NavLink to="url.com" className="mbtn">Order</NavLink>
                        <NavLink to={props.view} className="nbtn">View</NavLink>
                </div>
                
    </div>
  ) 
} 

export default MenuCard 