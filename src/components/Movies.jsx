import React from "react";
import { MovieCard } from "./index";

function Movies({ videos ,direction}) {
  // if(!videos) return "Loading...."
  // console.log(videos)
  return (
    <div className={`flex justify-center flex-${direction || 'row'} overflow-y-hidden py-10 pl-5 md:justify-start gap-4 `}>
    
      {videos?.map((video, index) => (
        <div  className="flex items-center  justify-center">
          { <MovieCard key={index} video={video} />}
        </div>
      ))}
    </div>
  );
}

export default Movies;
