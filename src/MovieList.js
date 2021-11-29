import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useHistory } from "react-router-dom";

// import { MovieList } from "./MovieList.js"
export function MovieList({ movies, setMovies }) {

    const history = useHistory()
    const removeMovie = (index) => {
        console.log(index)
        // create a copy of movie list and remove element from it
        // using filter
        const removeMovieIndex = index;
        const remainingMovies = movies.filter((mv, idx) => idx !== removeMovieIndex)

        console.log(remainingMovies, movies, removeMovieIndex)
        setMovies(remainingMovies)
    }


    return (<section className="movie-list">
        {/* <h1 className="main-heading">Movies</h1> */}
        {movies.map(({ poster, name, summary, rating }, index) =>
            <Movie
                name={name}
                poster={poster}
                summary={summary}
                rating={rating}
                index={index}

                deleteButton={<IconButton aria-label="delete" color="error" onClick={() => removeMovie(index)} >
                    <DeleteIcon color="error" />
                </IconButton>}

                editButton={<IconButton aria-label="delete" color="error" onClick={() => history.push("/movies/edit/" + index)} >
                    <ModeEditIcon color="primary" />
                </IconButton>}

            />)}
    </section>);
}
