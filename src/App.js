import './App.css';
import { useState, useEffect } from "react";
import { MovieList } from './MovieList';
import { Switch, Route, Link, Redirect } from "react-router-dom";

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
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { API } from "./global"



function App() {



  const history = useHistory()

  const [movies, setMovies] = useState([]);

  // theming

  const [mode, setMode] = useState("dark")

  // 1. Creating Context
  const theme = createTheme({
    palette: {
      mode: mode
    },
  });


  // useEffect

  useEffect(() => {
    fetch(`${API}/movies`, {
      method: "GET"
    })
      .then(data => data.json())
      .then((mvs) => setMovies(mvs))
  }, [])


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
              {/* <Button onClick={() => history.push("/color-game")} size="large" color="inherit" aria-label="home">
                Color-Game
              </Button> */}

              {/* <Button onClick={() => history.push("/basic-form")} size="large" color="inherit" aria-label="home">
                Basic Form
              </Button> */}

              <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")} style={{ marginLeft: "auto" }} size="large" color="inherit" aria-label="home" startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}>
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
              {/* <AddMovie movies={movies} setMovies={setMovies} /> */}
              <AddMovie />
            </Route>

            <Route path="/movies/edit/:id">
              {/* <EditMovie movies={movies} setMovies={setMovies} /> */}
              <EditMovie />
            </Route>

            {/* this will match anything, so be carefull with placement/order */}
            <Route path="/movies/:id">
              {/* <MovieDetails movies={movies} /> */}
              <MovieDetails />
            </Route>

            <Route path="/movies">
              {/* <MovieList movies={movies} setMovies={setMovies} /> */}
              <MovieList />
            </Route>

            {/* <Route path="/color-game">
              <AddColor />
            </Route> */}

            {/* <Route path="/basic-form">
              <BasicForm />
            </Route> */}

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


