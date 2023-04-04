import './App.css';
import { useState, useEffect } from "react";
import { MovieList } from './MovieList';
import { Routes, Route, Link } from "react-router-dom";

import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { API } from "./global"



function App() {



  const navigate = useNavigate()

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
              <Button onClick={() => navigate("/")} size="large" color="inherit" aria-label="home">
                <Link to="/">

                  Home
                </Link>
              </Button>
              <Button onClick={() => navigate("/movies")} size="large" color="inherit" aria-label="home">
                <Link to="/movies">
                  Movies
                </Link>
              </Button>
              <Button onClick={() => navigate("/movies/add")} size="large" color="inherit" aria-label="home">
                <Link to="/movies/add">
                  Add Movies
                </Link>
              </Button>
              {/* <Button onClick={() => navigate("/color-game")} size="large" color="inherit" aria-label="home">
                Color-Game
              </Button> */}

              {/* <Button onClick={() => navigate("/basic-form")} size="large" color="inherit" aria-label="home">
                Basic Form
              </Button> */}

              <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")} style={{ marginLeft: "auto" }} size="large" color="inherit" aria-label="home" startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}>
                {mode === "dark" ? "light" : "dark"} mode
              </Button>

            </Toolbar>
          </AppBar>

          {/* ************************* Router ***************************** */}


          <Routes>

            <Route path="/" element={<Welcome />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="**" element={<NotFound />} />

          </Routes>
        </div >
      </Paper>
    </ThemeProvider >
  );
}

export default App;


