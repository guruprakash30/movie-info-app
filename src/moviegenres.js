import Genre from "./genre";
import useFecth from "./usefectch";

const MovieGenres = () => {
    
    const {data:genres, isPending, error, setUrl} = useFecth('https://api.themoviedb.org/3/genre/movie/list?api_key=05b670c12d1973fe82919a005ef06481');

    return (
        <>
        {genres && genres.genres.map((genre)=>
            <Genre genre={genre} extra={"movie"}/>
            )}
        </> 
    );
}
 
export default MovieGenres;