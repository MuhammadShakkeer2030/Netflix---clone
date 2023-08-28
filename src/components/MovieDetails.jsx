import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utilty/FetchFromApi";
import Videos from "./Movies";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { LoadingSkeleton, Movies } from "./index";
import { BsPlay, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true);
    // fetching search videos
    fetchFromApi(`/videos?part=snippet,statistics&id=${id}`).then((data) =>
      setMovieDetails(data.items[0])
    );
    // fetching related videos
    fetchFromApi(`/search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
    // setLoading(false);
  }, []);
  console.log(movieDetails);
  // if (!movieDetails) return <LoadingSkeleton/> ;
  const {} = movieDetails;
  return (
    <section className="flex flex-col p-5 md:p-10  justify-evenly ">
      <div className="w-full relative ">
        {/* video */}
        <img
          className="w-full h-[80vh] object-cover "
          src="https://e1.pxfuel.com/desktop-wallpaper/203/617/desktop-wallpaper-star-wars-movie-poster-posted-by-samantha-tremblay-star-wars-movie-poster.jpg"
          alt="big"
        />
        <div className="absolute pl-5 py-3 bottom-[5%] md:bottom-[20%] shadow-2xl bg-black/75 shadow-black ">
          <p className="text-[36px] font-bold tracking-wider mb-4">
            The prisoners
          </p>
          <div className="flex gap-2 items-center mb-4">
            <span className="flex gap-2 ">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarHalf className="text-yellow-500" />
            </span>
            <div className="h-[35px] border-l-4 border-white/50 "></div>
            <span className="">
              2.5 <span>hrs </span>
            </span>{" "}
            <div className="h-[35px] border-l-4 border-white/50 "></div>
            <span>Action</span>
          </div>
          <p className="w-[inherit] md:w-[500px] mb-4 leading-7 tracking-wide cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            unde quis consequatur similique illo debitis exercitationem
            dignissimos labore vero autem temporibus, repellat perferendis
            dicta, id accusamus assumenda, nemo minus nostrum.
          </p>
          <div className="flex gap-4">
            <button className=" flex items-center  gap-2 px-2 py-3 bg-black border-[2px] border-yellow-400 rounded-2xl tracking-widest hover:border-white outline-none hover:text-yellow-400 cursor-pointer">
              {" "}
              <BsPlay style={{ fontWeight: "bold" }} /> PLAY TRILER
            </button>
            <button className=" flex items-center  gap-2 px-2 py-3 bg-black border-[2px] border-yellow-400 rounded-2xl tracking-widest hover:border-white outline-none hover:text-yellow-400 cursor-pointer">
              {" "}
              <BiPlus style={{ fontWeight: "bold" }} /> MY LIST
            </button>
          </div>
        </div>
        {/* gradient */}
        <div className="w-full  absolute -z-10 top-0 bottom-0 movie-r-t-l-gradient-bgcolor"></div>
      </div>
      {/* Related videos section */}
      <div className="w-full ">
        <Movies videos={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </div>
    </section>
  );
}

export default MovieDetails;
