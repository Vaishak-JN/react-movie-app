import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "./global"

// export function MovieDetails({ movies }) {
export function MovieDetails() {

    const [movie, setMovie] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API}/movies/${id}`, {
            method: "GET"
        })
            .then(data => data.json())
            .then((mv) => setMovie(mv))
    }, [id])



    // console.log(movies)
    // const movie = movies[movieId];
    console.log(movie);
    const navigate = useNavigate();
    return (
        <div className="movie-detail-container">

            <iframe width="100%" height="650" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div className="movie-specs">

                <h2 className="movie-name">{movie.name}</h2>
                <h5 className="rating">⭐ {movie.rating}</h5>
            </div>
            <p className="summary text-muted">{movie.summary}</p>

            <Button variant="contained" startIcon={<KeyboardBackspaceIcon />} onClick={() => navigate("/movies")} >Back</Button>
        </div>
    );
}
