import { NavLink, Outlet } from "react-router-dom";

const Genres = () => {

    return (
        <>
        <nav className="navbar is-white">
            <div className="navbar-menu">
                <div className="navbar-start my-3">
                        <NavLink to="/genre/movie" style={()=>({textDecoration:'none'})} className={({isActive})=>(isActive?'navbar-item has-text-weight-bold tag is-light is-large mx-2':'navbar-item has-text-weight-bold mx-2')}>MOVIES</NavLink>
                        <NavLink to="/genre/tv" style={()=>({textDecoration:'none'})} className={({isActive})=>(isActive?'navbar-item has-text-weight-bold tag is-light is-large mx-2':'navbar-item has-text-weight-bold mx-2')}>TVSHOWS</NavLink>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}
 
export default Genres;