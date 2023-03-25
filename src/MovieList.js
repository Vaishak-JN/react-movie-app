import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "./global"

// import { MovieList } from "./MovieList.js"

// export function MovieList({ movies, setMovies }) {
export function MovieList() {

    const [movies, setMovies] = useState([])

    const getMovies = () => {
        fetch(`${API}/movies`, {
            method: "GET"
        })
            .then(data => data.json())
            .then((mvs) => setMovies(mvs))
    }

    useEffect(getMovies, []);

    const history = useHistory()

    // const removeMovie = (index) => {
    //     console.log(index)
    //     // create a copy of movie list and remove element from it
    //     // using filter
    //     const removeMovieIndex = index;
    //     const remainingMovies = movies.filter((mv, idx) => idx !== removeMovieIndex)
    //     console.log(remainingMovies, movies, removeMovieIndex)
    //     setMovies(remainingMovies)
    // }

    // after delete->refresh to see change
    const removeMovie = (id) => {
        fetch(`${API}/movies/${id}`, {
            method: "Delete"
        })
            .then(() => getMovies())
    }

    return (<section className="movie-list">
        {/* <h1 className="main-heading">Movies</h1> */}
        {movies.map(({ poster, name, summary, rating, id, _id }, index) =>
            <Movie
                name={name}
                poster={poster}
                summary={summary}
                rating={rating}
                id={_id}

                deleteButton={<IconButton aria-label="delete" color="error" onClick={() => removeMovie(_id)} >
                    <DeleteIcon color="error" />
                </IconButton>}

                editButton={<IconButton style={{ marginLeft: "auto" }} aria-label="delete" color="error" onClick={() => history.push(`/movies/edit/${_id}`)} >
                    <ModeEditIcon color="primary" />
                </IconButton>}

            />)}
    </section>);
}
