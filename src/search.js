import { useParams } from "react-router-dom";
import Review from "./review";
import useFecth from "./usefectch";
import Videocontent from "./video";
const Search = () => {

    const {name} = useParams();

    const {data:searchResult, isPending, error, setUrl} = useFecth('https://api.themoviedb.org/3/search/movie?api_key=05b670c12d1973fe82919a005ef06481&query='+name)

   const base_url = 'https://image.tmdb.org/t/p/w500';

    return (  
        <div>{searchResult && searchResult.results.filter(element => element.poster_path!=null && element.title!=null && element.overview!=null).map((res)=>
            <div className="container py-5">
                <div className="box has-shadow">
                <div className="media">
                    <div className="media-left">
                    <div className="card">
                        <div className="card-image">
                        <div className="image">
                            <img src={base_url+res.poster_path}/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <h3 className="heading has-text-justified">{res.title}</h3>
                            <span className="icon-text my-2">
                                <span className="icon has-text-warning">
                                <i className="fa-solid fa-star"></i>
                                </span>
                                <span className="tag is-dark">{res.vote_average}</span>
                                <span className="px-2">{res.vote_count/1000}k votes</span>
                                <span className="px-1 has-text-danger"><i className="fa-solid fa-thumbs-up"></i></span>
                            </span>
                            <blockquote className="heading">{res.overview}</blockquote>
                            <Videocontent query={res.title+"trailer"}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )}</div>
    );
}
 
export default Search;