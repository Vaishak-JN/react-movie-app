import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { MovieList } from './MovieList';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Dashboard } from '@mui/icons-material';
import { AddColor } from './AddColor';
import { INITIAL_MOVIES } from './INITIAL_MOVIES';
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';



function App() {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  const [movies, setMovies] = useState(INITIAL_MOVIES);

  return (
    <div className="App">

      {/* *************** Router ******************** */}
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies/add">Add Movies</Link>
        </li>
        <li>
          <Link to="/color-game">Color-Game</Link>
        </li>
      </ul>

      <hr />
      {/* ************************* Router ***************************** */}

      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        {/* Exact Path */}
        <Route exact path="/">
          <Welcome />
        </Route>

        {/* **************** Redirect ************** */}
        {/* films-->movies */}

        <Route path="/films">
          <Redirect to="/movies" />
        </Route>


        {/* If data need to be shared , put it in common parent component */}

        <Route path="/movies/add">
          <AddMovie movies={movies} setMovies={setMovies} />
        </Route>

        <Route path="/movies/edit/:id">
          <EditMovie movies={movies} setMovies={setMovies} />
        </Route>


        {/* this will match anything, so be carefull with placement/order */}
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>



        <Route path="/movies">
          <MovieList movies={movies} setMovies={setMovies} />
        </Route>

        <Route path="/color-game">
          <AddColor />
        </Route>

        <Route path="**">
          <NotFound />
        </Route>

      </Switch>

    </div >
  );
}

export default App;

