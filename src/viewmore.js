import { useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./pagination";
import useFecth from "./usefectch";

const ViewMore = () => {

    const {extra_link1, extra_link2} = useParams();
   
   const url = 'https://api.themoviedb.org/3/'+extra_link1+'/'+extra_link2+'?&api_key=05b670c12d1973fe82919a005ef06481';
  

   const {data:nowPlayings, isPending, error, setUrl} = useFecth(url);

   const base_url = 'https://image.tmdb.org/t/p/w500';

   const Isvalid = ({nowPlayings})=>{
    
    const list = nowPlayings.map((nowPlaying)=>
        <div className="column is-3 py-3">
            <div className="card">
            <div className="card-image">
                <figure className="image ">
                    <img src={base_url+nowPlaying.poster_path}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <button className="button is-dark has-text-weight-bold has-text-justified">{nowPlaying.vote_average}</button>
                    </div>
                    {nowPlaying.title && <div className="media-content">
                        <h3 className="has-text-weight-bold">{nowPlaying.title}</h3>
                    </div>}
                    {nowPlaying.name && <div className="media-content">
                        <h3 className="has-text-weight-bold">{nowPlaying.name}</h3>
                    </div>
                    }
                </div>
            </div>
            {nowPlaying.overview && <div className="container">
                <div className="notification is-light">
                <div className="content">
                    <p className="has-text-weight-medium has-text-justified">{nowPlaying.overview}</p>
                </div>
                </div>
            </div>}
        </div>
        </div>
    )

    return (
        <div className="container py-6">
            <div className="columns is-multiline">{list}</div>
        </div>
    )
}

return (
    <div>
        {nowPlayings && <Isvalid nowPlayings = {nowPlayings.results}/>}
        <Pagination setUrl={setUrl}/>
    </div>
)

}
 
export default ViewMore;