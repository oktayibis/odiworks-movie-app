import React, {useState} from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavbarPage from './component/NavbarPage';
import Footer from './component/Footer';
import ComingSoon from './pages/ComingSoon';
import NowPlaying from './pages/NowPlaying';
import PopularMovies from './pages/PopularMovies';
import TopRated from './pages/TopRated';
import SearchPage from './pages/SearchPage'
import MovieDetail from './pages/MovieDetail'

function App() {

 const [searchKey, setSearchKey] = useState('');
 
 const handleSearch = e => {
   setSearchKey(e.target.value)
 }
 
//console.log(`app: ` ,searchKey);


  return (

  
    
    <Router>
  
    <NavbarPage searchKey={searchKey} handleChange={handleSearch} />
  
      <Switch>
        <Route  exact path='/'>
        <NowPlaying />
        </Route>
        <Route exact path='/top-rated'>
          <TopRated />
        </Route>
        <Route exact path='/coming-soon'>
          <ComingSoon />
        </Route>
       <Route exact path='/popular-movies' component={PopularMovies} />
      <Route path='/search/:searchKey'>
        <SearchPage />
      </Route>
      <Route path='/detail/:movieId'>
        <MovieDetail />
      </Route>
     
      </Switch>

   <Footer />
   
    </Router>

  );
}

export default App;
