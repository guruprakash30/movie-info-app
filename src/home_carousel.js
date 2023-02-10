import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

const HomeCarousel = ({nowPlaying, extra_str, setNowPlaying, extra_link}) => {
    
    const base_url = 'https://image.tmdb.org/t/p/w500';

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll:1},
        { width: 550, itemsToShow: 2, itemsToScroll:2},
        { width: 850, itemsToShow: 3, itemsToScroll:3},
        { width: 1150, itemsToShow: 4, itemsToScroll:4},
        { width: 1450, itemsToShow: 5, itemsToScroll:5},
        { width: 1750, itemsToShow: 6, itemsToScroll:6},
      ]

      const handleRequest = (order)=>{

        if(order===1){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>a.popularity-b.popularity);
            setNowPlaying(copy);
        }

        if(order===2){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>b.popularity-a.popularity);
            setNowPlaying(copy); 
        }

        if(order===3){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>new Date(a.release_date)-new Date(b.release_date));
            setNowPlaying(copy)
        }

        if(order===4){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>new Date(b.release_date)-new Date(a.release_date));
            setNowPlaying(copy);
        }

        if(order===5){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>a.vote_average-b.vote_average);
            setNowPlaying(copy);
        }

        if(order===6){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>b.vote_average-a.vote_average);
            setNowPlaying(copy);
        }

        if(order===7){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>a.vote_count-b.vote_count);
            setNowPlaying(copy);
        }

        if(order===8){
            const copy = [...nowPlaying];
            copy.sort((a,b)=>b.vote_count-a.vote_count);
            setNowPlaying(copy);
        }
    }


    return (<div className="container py-6">
    <div className="box has-shadow">
    <div className="columns">
        <div className="column is-10">
        <div className="title">
    GET LATEST {extra_str}
</div>
<div className="heading">
    NOW PLAYING
</div>
        </div>
        <div className="column is-2">
        <nav className="navbar-item is-hoverable has-dropdown">
                <a className="navbar-link">Sort By</a>
                <div className="navbar-dropdown">
                    <a onClick={()=>{handleRequest(1)}} className="navbar-item">popular: low to high</a>
                    <a onClick={()=>{handleRequest(2)}} className="navbar-item">popular: high to low</a>
                    <a onClick={()=>{handleRequest(3)}} className="navbar-item">release date: low to high</a>
                    <a onClick={()=>{handleRequest(4)}} className="navbar-item">release date: high to low</a>
                    <a onClick={()=>{handleRequest(5)}} className="navbar-item">rating: low to high</a>
                    <a onClick={()=>{handleRequest(6)}} className="navbar-item">rating: high to low</a>
                    <a onClick={()=>{handleRequest(7)}} className="navbar-item">no of votes: low to high</a>
                    <a onClick={()=>{handleRequest(8)}} className="navbar-item">no of votes: high to low</a>
                </div>
            </nav>
        </div>
    </div>
    <Carousel itemPadding={[10,10]} breakPoints={breakPoints}>
    {nowPlaying && nowPlaying.map((movie)=>
        <div className="card">
    <div className="card-image">
        <figure className="image">
            <img src={base_url+movie.poster_path}/>
        </figure>
    </div>
    <div className="card-content">
        <div className="media">
            <div className="media-left">
                <button className="button is-dark has-text-weight-bold has-text-justified">{movie.vote_average}</button>
            </div>
            {movie.title && <div className="media-content">
                <h3 className="has-text-weight-bold">{movie.title}</h3>
            </div>}
            {movie.name && <div className="media-content">
                <h3 className="has-text-weight-bold">{movie.name}</h3>
            </div>}
        </div>
    </div>
</div>
    )}
    </Carousel>
<div className="level-right">
    <div className="level-item">
    <Link to={"/"+extra_link} className="button">{">>"}</Link>
    </div>
</div>
</div>
</div>);
}
 
export default HomeCarousel;