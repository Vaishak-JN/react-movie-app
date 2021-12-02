import './App.css';
import { useState } from "react";
import { MovieList } from './MovieList';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { AddColor } from './AddColor';
import { INITIAL_MOVIES } from './INITIAL_MOVIES';
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



function App() {

  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");

  const history = useHistory()

  const [movies, setMovies] = useState(INITIAL_MOVIES);

  // theming

  const [mode, setMode] = useState("dark")

  // 1. Creating Context
  const theme = createTheme({
    palette: {
      mode: mode
    },
  });

  const paperStyles = { borderRadius: 0, minHeight: "100vh" };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={paperStyles} >
        <div className="App">

          {/* *************** Router ******************** */}
          {/* <ul>
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
        <hr /> */}

          {/* *************** Router ******************** */}

          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => history.push("/")} size="large" color="inherit" aria-label="home">
                Home
              </Button>
              <Button onClick={() => history.push("/movies")} size="large" color="inherit" aria-label="home">
                Movies
              </Button>
              <Button onClick={() => history.push("/movies/add")} size="large" color="inherit" aria-label="home">
                Add Movies
              </Button>
              <Button onClick={() => history.push("/color-game")} size="large" color="inherit" aria-label="home">
                Color-Game
              </Button>

              <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")} size="large" color="inherit" aria-label="home" startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}>
                {mode === "dark" ? "light" : "dark"} mode
              </Button>

            </Toolbar>
          </AppBar>

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
      </Paper>
    </ThemeProvider >
  );
}

export default App;

