import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const CarouselDesign = ({data,searchData,setData,setUrl,extra_obj,extra_str,extra}) => {

    const handleRequest = (order)=>{

        if(order===1){
            const copy = [...data];
            copy.sort((a,b)=>a.popularity-b.popularity);
            setData(copy);
        }

        if(order===2){
            const copy = [...data];
            copy.sort((a,b)=>b.popularity-a.popularity);
            setData(copy); 
        }

        if(order===3){
            
            if(data.size>0 && data[0].first_air_date!=null){console.log(1);
                const copy = [...data];
                copy.sort((a,b)=>a.first_air_date.slice(0,4)-b.first_air_date.slice(0,4));
                setData(copy);console.log(data);

            }
            else{
                const copy = [...data];
                copy.sort((a,b)=>new Date(a.release_date)-new Date(b.release_date));
                setData(copy);
            }
        }

        if(order===4){
            if(data.size>0 && data[0].first_air_date){
                const copy = [...data];
                copy.sort((a,b)=>b.first_air_date.slice(0,4)-a.first_air_date.slice(0,4));
                setData(copy);

            }
            else{
                const copy = [...data];
                copy.sort((a,b)=>new Date(b.release_date)-new Date(a.release_date));
                setData(copy);
            }
        }

        if(order===5){
            const copy = [...data];
            copy.sort((a,b)=>a.vote_average-b.vote_average);
            setData(copy);
        }

        if(order===6){
            const copy = [...data];
            copy.sort((a,b)=>b.vote_average-a.vote_average);
            setData(copy);
        }

        if(order===7){
            const copy = [...data];
            copy.sort((a,b)=>a.vote_count-b.vote_count);
            setData(copy);
        }

        if(order===8){
            const copy = [...data];
            copy.sort((a,b)=>b.vote_count-a.vote_count);
            setData(copy);
        }
    }


    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll:1},
        { width: 550, itemsToShow: 2, itemsToScroll:2},
        { width: 850, itemsToShow: 3, itemsToScroll:3},
        { width: 1150, itemsToShow: 4, itemsToScroll:4},
        { width: 1450, itemsToShow: 5, itemsToScroll:5},
        { width: 1750, itemsToShow: 6, itemsToScroll:6},
      ];

      const base_url = 'https://image.tmdb.org/t/p/w500';

      const [searchByUser,setSearchByUser]=useState('');

      const handlechange = (event)=>{
        setSearchByUser(event.target.value);
      }

      const handleSearch = () => {
        
        const res = searchData.find( element => element.english_name.toUpperCase()===searchByUser.toUpperCase());

        if(res){console.log('https://api.themoviedb.org/3/discover/'+extra+'?api_key=05b670c12d1973fe82919a005ef06481&with_original_language='+res.iso_639_1+"&with_genres="+extra_obj.id);setUrl('https://api.themoviedb.org/3/discover/'+extra+'?api_key=05b670c12d1973fe82919a005ef06481&with_original_language='+res.iso_639_1+"&with_genres="+extra_obj.id);}
      }

      const handleTrend = (userChoice) =>{

        if(userChoice==='d' && extra_str==='TRENDING MOVIES'){
            setUrl('https://api.themoviedb.org/3/trending/movie/day?api_key=05b670c12d1973fe82919a005ef06481');
        }

        if(userChoice==='w' && extra_str==='TRENDING MOVIES'){
            setUrl('https://api.themoviedb.org/3/trending/movie/week?api_key=05b670c12d1973fe82919a005ef06481');
        }

        if(userChoice==='d' && extra_str==='TRENDING TV SHOWS'){
            setUrl('https://api.themoviedb.org/3/trending/tv/day?api_key=05b670c12d1973fe82919a005ef06481');
        }

        if(userChoice==='w' && extra_str==='TRENDING TV SHOWS'){
            setUrl('https://api.themoviedb.org/3/trending/tv/week?api_key=05b670c12d1973fe82919a005ef06481');
        }
      }

    return (
        <div className="container py-6">
        <div className="box has-shadow">
        <nav className="navbar is-white">
            <div className="navbar-brand">
                <a className="navbar-item">
                {extra_str && <div className="heading">
                 {extra_str}
                 </div>}
                 {extra_obj && <div className="heading">
                 {extra_obj.name}
                 </div>}
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item is-hoverable has-dropdown">
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
                    </div>
                </div>
                <div className="navbar-end">
                    {searchData && <div className="navbar-item">
                    <a className="field has-addons">
                    <p className="control">
                    <input className="input" value={searchByUser} onChange={handlechange} type="text" placeholder="search by language"/>
                    </p>
                    <p className="control">
                    <button className="button" onClick={()=>handleSearch()}>
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    </button>
                    </p>
                    </a>
                    </div>}
                    {extra_str && <>
                    <a className="navbar-item heading has-text-weight-semibold" onClick={()=>{handleTrend("d")}}>ON DAY</a>
                    <a className="navbar-item heading has-text-weight-semibold" onClick={()=>{handleTrend("w")}}>ON WEEK</a>
                    </>}
                </div>
            </div>
        </nav>
        <Carousel itemPadding={[10,10]} breakPoints={breakPoints}>
{data && data.map((element)=>
    <div className="card">
<div className="card-image">
    <figure className="image">
        <img src={base_url+element.poster_path}/>
    </figure>
</div>
<div className="card-content">
    <div className="media">
        <div className="media-left">
            <button className="button is-dark has-text-weight-bold has-text-justified">{element.vote_average}</button>
        </div>
        {element.title && <div className="media-content">
            <h3 className="has-text-weight-bold">{element.title}</h3>
        </div>}
        {element.name && <div className="media-content">
            <h3 className="has-text-weight-bold">{element.name}</h3>
        </div>}
    </div>
    <div className="columns">
        <div className="column">
            <span className="icon-text">
                <span className="icon"><i className="fa-solid fa-hashtag"></i></span>
                <span>{element.vote_count/1000+"k"}</span>
            </span>
        </div>
        {element.release_date && <div className="column">
            <span className="icon-text">
                <span className="icon"><i className="fa-solid fa-clock"></i></span>
                <span>{new Date(element.release_date).toDateString().slice(11,15)}</span>
            </span>
        </div>}

        {element.first_air_date && <div className="column">
            <span className="icon-text">
                <span className="icon"><i className="fa-solid fa-clock"></i></span>
                <span>{element.first_air_date.slice(0,4)}</span>
            </span>
        </div>}
        
    </div>
    
</div>
</div>)
}
</Carousel>
<div className="level-right">
<div className="level-item">
<button className="button">{">>"}</button>
</div>
</div>
</div>
</div>
    );
}
 
export default CarouselDesign;