import "./MenuCard.css"
import React from 'react'
import MenuCard from "./MenuCard";
import MenuCardData from "./MenuCardData"

const Menu = () => {
  return (
   <div className="menu-card">
    <h1 className="menu-heading">Today's Special</h1>
    <div className="menu-container">
          
            
            
               
          {MenuCardData.map((val,ind) =>{
                return(
                    <MenuCard key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}/>
                )
               })}
        </div>
   </div>

    
  ) ;
} 

export default Menu ;