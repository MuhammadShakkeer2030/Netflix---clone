import React, { useEffect, useState } from "react";
import {
  AiOutlinePlayCircle,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utilty/constants";

function MovieCard({ key, video }) {
  const [cartClick, setCartClick] = useState(false);
  const [playOrCartIconClick, setPlayOrCartIconClick] = useState(true);
  // console.log(playOrCartIconClick);
  return (
    <div className="relative cursor-pointer w-[100px] md:w-[140px] md:h-[auto] transition-transform hover:scale-110   ">
      <Link
        to={
          playOrCartIconClick
            ? console.log("play btn clicked")
            : console.log("\videoid")
        }
        style={{ width: "inherit", height: "inherit" }}
        className="relative z-20"
      >
        <img
          src={
            "https://marketplace.canva.com/EAFH4NHZv_8/1/0/1131w/canva-white-mystery-movie-poster-UfgB1AQbfvk.jpg"
          }
          className="w-full h-[200px] object-cover rounded-2xl"
          alt={video}
        />
        <div className="mt-4">
          <p className="text-[18px] font-[500]  leading-loose">Riddle</p>
          <span className="flex items-center gap-2 text-[16px]  leading-none">
            <AiOutlineStar /> 7.5
          </span>
        </div>

        <div
          className="absolute top-0 bottom-4 transition-colors  duration-500 ease-in-out group-hover:-top-0 hover:bg-black/50 rounded-2xl  pr-4 pt-4 group"
          style={{ width: "inherit" }}
        >
          <AiOutlineShoppingCart
            className="absolute  z-50  right-4 group-hover:text-blue-900 hover:text-blue-400"
            onClick={() => {
              // setPlayOrCartIconClick(true);
              console.log("cart clicked");
            }}
          />
          <AiOutlinePlayCircle
            className="absolute  z-50 top-[30%] lef-[60%] group-hover:text-blue-900 hover:text-blue-400"
            onClick={() => {
              // setPlayOrCartIconClick(true);
              console.log("play clicked");
            }}
          />
        </div>
      </Link>

     
    </div>
  );
}

export default MovieCard;
