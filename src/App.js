import NavBar from './navbar';
import { Routes, Route} from 'react-router-dom';
import Search from './search';
import Genres from './genres';
import Trending from './trending';
import Home from './home';
import ViewMore from './viewmore';
import Genre from './genre';
import MovieGenres from './moviegenres';
import TvShowGenres from './tvshowgenre';

function App() {

  return (
      <>
      <NavBar/>
       <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path=":extra_link1/:extra_link2" element={<ViewMore/>}/>
        </Route>
        <Route path="/search/:name" element={<Search/>}/>
        <Route path="/genre" element={<Genres/>}>
          <Route path="movie" element={<MovieGenres/>}/>
          <Route path="tv" element={<TvShowGenres/>}/>
        </Route>
        <Route path="/trending" element={<Trending/>}/>
       </Routes>
      </>
  );
}

export default App;
