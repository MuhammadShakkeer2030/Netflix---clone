import React, { useState } from "react";
import { categories, sidebarCategories } from "../utilty/constants";
function SideBar({ setSelectedCategory, selectedCatogory }) {
  //   const [selectedCatogory, setSelectedCategory] = useState("");
  console.log(sidebarCategories);
  return (
    <div className=" flex flex-wrap overflow-x-scroll ">
      {Array(sidebarCategories)?.map(({ genres, languages }, index) => (
        <div key={index} className="flex flex-wrap">
          {/* genres maping...... */}
          <h1>Genres</h1>
          {genres?.map(({ name, Icon }, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(name)}
              className="category-btn flex  md:flex-row text-[10px] md:text-[14px]"
              style={{ background: name === selectedCatogory && "#FC1503" }}
            >
              <span
                className="hidden md:block"
                style={{
                  color: name === selectedCatogory ? "white" : "red",
                  marginRight: "15px",
                }}
              >
                {Icon}
              </span>
              <span
                style={{ opacity: name === selectedCatogory ? "1" : "0.6" }}
              >
                {name}
              </span>
            </button>
          ))}

          {/* languages maping..... */}
          <h1>Languages</h1>
          {languages?.map(({ name, Icon }, index) => (
            <button key={index} onClick={() => selectedCatogory(name)} className="category-btn flex md:flex-row text-[10px] md:text-[14px] " style={{ background: name === selectedCatogory && "#FC1503" }} >
              <span className="hidden md:block" style={{ 
                color: name === selectedCatogory ? "white" : "red" , marginRight: "15px"
              }} > {Icon}</span>
              <span style={{
                opacity:name  === selectedCatogory ? "1" :"0.6"
              }} >{name}</span>
            </button>
          ))}
        </div>
      ))}


    </div>
  );
}

export default SideBar;
