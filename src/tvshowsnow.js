import { useEffect, useState } from "react";
import HomeCarousel from "./home_carousel";
import useFecth from "./usefectch";

const TvShowsNow = () => {

    const {data:res, isPending, error, setUrl} = useFecth('https://api.themoviedb.org/3/tv/on_the_air?api_key=05b670c12d1973fe82919a005ef06481');

    const [nowPlaying,setNowPlaying] = useState(null);

    useEffect(()=>{
        if(res!=null)setNowPlaying(res.results);
    },[res]);

    return(
        <>
        {nowPlaying && <HomeCarousel nowPlaying={nowPlaying} extra_str={"TV SHOWS"} extra_link={"tv/on_the_air"} setNowPlaying={setNowPlaying}/>}
        </>
    );
}
 
export default TvShowsNow;