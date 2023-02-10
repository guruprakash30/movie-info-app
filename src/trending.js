import { useEffect, useState } from "react";
import CarouselDesign from "./carousel_design";
import useFecth from "./usefectch";

const Trending = () => {
    
    const {data:resOfMovie,setUrl:setResOfMovie}=useFecth('https://api.themoviedb.org/3/trending/movie/day?api_key=05b670c12d1973fe82919a005ef06481');
    const {data:resOfTv, setUrl:setResOfTv}=useFecth('https://api.themoviedb.org/3/trending/tv/day?api_key=05b670c12d1973fe82919a005ef06481');
    
    const [moviesTrending,setMoviesTrending]=useState(null);

    const [tvShowsTrending,setTvShowsTrending]=useState(null);
    
    useEffect(()=>{
        if(resOfMovie!=null){setMoviesTrending(resOfMovie.results); console.log(moviesTrending);}
        if(resOfTv!=null)setTvShowsTrending(resOfTv.results);
    },[resOfMovie,resOfTv])
    
    return (
        <>
        {moviesTrending && <CarouselDesign data={moviesTrending} searchData={null} setData={setMoviesTrending} extra_obj={null} extra_str={"TRENDING MOVIES"} setUrl={setResOfMovie}/>}
        {tvShowsTrending && <CarouselDesign data={tvShowsTrending} searchData={null} setData={setTvShowsTrending} extra_obj={null} extra_str={"TRENDING TV SHOWS"} setUrl={setResOfTv}/>}
        </>
    );
}
 
export default Trending;