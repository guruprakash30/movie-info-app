import useFecth from "./usefectch";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";

const Review = ({movieId}) => {

    const {data:reviews, isPending, error, setUrl}=useFecth('https://api.themoviedb.org/3/movie/'+movieId+'/reviews?api_key=05b670c12d1973fe82919a005ef06481');

    const base_url= 'https://image.tmdb.org/t/p/w500';

    const [res,setRes] = useState(null)

    useEffect(()=>{
        if(reviews!=null)setRes(reviews.results.filter(review => review.author_details.avatar_path!=null && review.author_details.rating!=null && review.content!=null).sort((a,b)=>b.author_details.rating-a.author_details.rating));
    },[reviews])

    return (
            
        <>{res && res.length>0 && <Carousel itemsToShow={1} pagination={false}>{res.map((review)=>
            <div className="box has-shadow">
                <span className="icon-text">
                    <span className="icon">
                    <div className="image is-24x24">
                    <img className="is-rounded" src={base_url + review.author_details.avatar_path}/>
                    </div>
                    </span>
                    <span className="heading tag is-dark my-2">{"@"+review.author}</span>
                    <span className="icon has-text-danger my-2">
                    <i class="fa-solid fa-star"></i>
                    </span>
                    <span className="tag is-dark my-2">{review.author_details.rating+" / 10"}</span>
                </span>
                <div className="scroll">
                <div className="notification">{review.content}</div>
                </div>
            </div>
            )}</Carousel>}</>
    );
}
 
export default Review;