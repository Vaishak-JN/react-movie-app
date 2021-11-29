import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";


export function AddMovie({ movies, setMovies }) {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const [rating, setRating] = useState("");
    const [trailer, setTrailer] = useState("")

    const history = useHistory();

    const newPath = () => {
        history.push("/movies");
    };

    // no need as route is changed
    // const clearInputs = () => {
    //     setName("");
    //     setPoster("");
    //     setSummary("");
    //     setRating("");
    // };

    const addMovie = () => {
        const newMovie = { name, poster, rating, summary, trailer };
        console.log(newMovie);
        setMovies([...movies, newMovie]);
        // clearInputs();
        newPath();
    };

    return (
        <div className="add-movie-form">
            <h2>Add Movies here</h2>
            <TextField fullWidth id="movie-name" label="Movie name" variant="outlined" onChange={(event) => { setName(event.target.value); }} value={name} margin="dense" />

            <TextField fullWidth id="movie-poster" label="Poster url" variant="outlined" onChange={(event) => { setPoster(event.target.value); }} value={poster} margin="dense" />

            <TextField fullWidth id="movie-summary" label="Movie summary" variant="outlined" onChange={(event) => { setSummary(event.target.value); }} value={summary} margin="dense" />

            <TextField fullWidth id="movie-rating" label="Movie rating" variant="outlined" onChange={(event) => { setRating(event.target.value); }} value={rating} margin="dense" />

            <TextField fullWidth id="movie-trailer" label="Movie trailer" variant="outlined" onChange={(event) => { setTrailer(event.target.value); }} value={trailer} margin="dense" />

            <Button fullWidth margin="normal" variant="contained" onClick={addMovie}>Add Movie</Button>
        </div>
    );
}
