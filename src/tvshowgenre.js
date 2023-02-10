import Genre from "./genre";
import useFecth from "./usefectch";

const TvShowGenres = () => {
    
    const {data:genres, isPending, error, setUrl} = useFecth('https://api.themoviedb.org/3/genre/tv/list?api_key=05b670c12d1973fe82919a005ef06481');

    return (
        <>
        {genres && genres.genres.map((genre)=>
            <Genre genre={genre} extra={"tv"}/>
            )}
        </> 
    );
}
 
export default TvShowGenres;