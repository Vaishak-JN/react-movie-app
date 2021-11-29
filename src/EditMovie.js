import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


export function EditMovie({ movies, setMovies }) {

    const { id } = useParams()
    const movie = movies[id];

    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [summary, setSummary] = useState(movie.name);
    const [rating, setRating] = useState(movie.rating);
    const [trailer, setTrailer] = useState(movie.trailer)

    const history = useHistory();

    const newPath = () => {
        history.push("/movies");
    };

    // no need as route is changed
    const clearInputs = () => {
        setName("");
        setPoster("");
        setSummary("");
        setRating("");
    };

    const editMovie = () => {
        // make a copy of movies and replace edited movie

        const updatedMovie = { name, poster, rating, summary, trailer };

        const copyMovies = [...movies]
        copyMovies[id] = updatedMovie;
        // copyMovies.splice(id,1,updatedMovie)

        setMovies(copyMovies)
        clearInputs();
        newPath();


    };

    return (
        <div className="add-movie-form">
            <h2>Edit Movies</h2>
            <TextField fullWidth id="movie-name" label="Movie name" variant="outlined" onChange={(event) => { setName(event.target.value); }} value={name} margin="dense" />

            <TextField fullWidth id="movie-poster" label="Poster url" variant="outlined" onChange={(event) => { setPoster(event.target.value); }} value={poster} margin="dense" />

            <TextField fullWidth id="movie-summary" label="Movie summary" variant="outlined" onChange={(event) => { setSummary(event.target.value); }} value={summary} margin="dense" />

            <TextField fullWidth id="movie-rating" label="Movie rating" variant="outlined" onChange={(event) => { setRating(event.target.value); }} value={rating} margin="dense" />

            <TextField fullWidth id="movie-trailer" label="Movie trailer" variant="outlined" onChange={(event) => { setTrailer(event.target.value); }} value={trailer} margin="dense" />

            <Button fullWidth color="success" margin="normal" variant="contained" onClick={editMovie}>Save</Button>
        </div>
    );
}
