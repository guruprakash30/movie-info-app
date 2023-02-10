import { useEffect, useState } from "react";
import CarouselDesign from "./carousel_design";
import useFecth from "./usefectch";

const Genre = ({genre,extra}) =>{

    const {data:eachGenre, setData, setUrl} = useFecth('https://api.themoviedb.org/3/discover/'+extra+'/?api_key=05b670c12d1973fe82919a005ef06481&with_genres='+genre.id);

    const {data:language} = useFecth('https://api.themoviedb.org/3/configuration/languages?api_key=05b670c12d1973fe82919a005ef06481');

    const [eachGenreResult,setEachGenreResult]=useState(null);
    
    useEffect(()=>{
        if(eachGenre!=null)setEachGenreResult(eachGenre.results);
    },[eachGenre]);
    
    return(
        <>
        {eachGenreResult && language && <CarouselDesign data={eachGenreResult} searchData={language} setData={setEachGenreResult} extra={extra} extra_str={null} extra_obj={genre} setUrl={setUrl}/>}
        </>
    )
}

export default Genre;