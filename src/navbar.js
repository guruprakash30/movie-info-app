import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NavBar = () => {

  const [searchformovie,setSearchForMovie]=useState('');

    const handlechange = (event)=>{
      setSearchForMovie(event.target.value);
    }

    const handleSearch = ()=>{
      window.location.href = '/search/'+searchformovie;
    }

    return ( <nav className="navbar is-white has-shadow">
    <div className="navbar-brand">
      <a className="navbar-item">
      <span><i className="icon fa-solid fa-person-walking"></i></span>
      </a>
      <a className="navbar-item">
      <span><i className="icon fa-solid fa-route"></i></span>
      </a>
      <a className="navbar-item">
        <span><i className="icon fa-solid fa-film"></i></span>
      </a>
      <a className="navar-burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <h3 className="has-text-weight-bold is-uppercase">get the latest movie updates</h3>
        </div>
      </div>
      <div className="navbar-end">
        <Link to="/genre/movie" className="has-text-weight-bold navbar-item">BY GENRE</Link>
        <Link to="/trending" className="has-text-weight-bold navbar-item">TRENDING</Link>
        <div className="navbar-item">
        <a className="field has-addons">
      <p className="control">
        <input className="input" value={searchformovie} onChange={handlechange} type="text" placeholder="search for movie"/>
      </p>
      <p className="control">
        <button className="button" onClick={()=>handleSearch()}>
        <span><i className="fa-solid fa-magnifying-glass"></i></span>
        </button>
      </p>
    </a>
        </div>
      </div>
    </div>
  </nav> );
}
 
export default NavBar;