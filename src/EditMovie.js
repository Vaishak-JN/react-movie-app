import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFormik } from "formik"
// import * as yup from 'yup';
import { formValidationSchema } from "./AddMovie";
import { API } from "./global"


// Higher order components

// export function EditMovie({ movies, setMovies }) {
// export function EditMovie() {

//     const { id } = useParams()
//     // const movie = movies[id];
//     const [movie, setMovie] = useState(null)

//     // const editMovie = (id) => {
//     // make a copy of movies and replace edited movie

//     useEffect(() => {
//         // const updatedMovie = { name, poster, rating, summary, trailer };
//         fetch(`https://61a8d90a33e9df0017ea3ba9.mockapi.io/movies/${id}`, {
//             method: "GET",

//         })
//             .then((data) => data.json())
//             .then((mv) => setMovie(mv))

//     }, [])

//     // };

//     // const editMovie = () => {
//     //     // make a copy of movies and replace edited movie

//     //     const updatedMovie = { name, poster, rating, summary, trailer };

//     //     const copyMovies = [...movies]
//     //     copyMovies[id] = updatedMovie;
//     //     // copyMovies.splice(id,1,updatedMovie)

//     //     setMovies(copyMovies)
//     //     clearInputs();
//     //     newPath();


//     // };



//     // untill movie data is available, do not set the form
//     return movie ? <UpdateMovie movie={movie} /> : "";
// }

// function UpdateMovie({ movie }) {

//     const [name, setName] = useState(movie.name);
//     const [poster, setPoster] = useState(movie.poster);
//     const [summary, setSummary] = useState(movie.summary);
//     const [rating, setRating] = useState(movie.rating);
//     const [trailer, setTrailer] = useState(movie.trailer)

//     const history = useHistory();

//     const newPath = () => {
//         history.push("/movies");
//     };

//     // no need as route is changed
//     const clearInputs = () => {
//         setName("");
//         setPoster("");
//         setSummary("");
//         setRating("");
//     };

//     // 1.method - PUT and pass the id
//     // 2. body - data & JSON
//     // 3. headers - JSON data

//     const editMovie = () => {

//         const updatedMovie = { name, poster, rating, summary, trailer };
//         fetch(`https://61a8d90a33e9df0017ea3ba9.mockapi.io/movies/${movie.id}`, {
//             method: "PUT",
//             body: JSON.stringify(updatedMovie),
//             headers: { "Content-type": "application/json" }
//         })
//             .then(() => history.push("/movies"))
//     };

//     return (
//         <div className="add-movie-form">
//             <h2>Edit Movies</h2>
//             <TextField fullWidth id="movie-name" label="Movie name" variant="outlined" onChange={(event) => { setName(event.target.value); }} value={name} margin="dense" />

//             <TextField fullWidth id="movie-poster" label="Poster url" variant="outlined" onChange={(event) => { setPoster(event.target.value); }} value={poster} margin="dense" />

//             <TextField fullWidth id="movie-summary" label="Movie summary" variant="outlined" onChange={(event) => { setSummary(event.target.value); }} value={summary} margin="dense" />

//             <TextField fullWidth id="movie-rating" label="Movie rating" variant="outlined" onChange={(event) => { setRating(event.target.value); }} value={rating} margin="dense" />

//             <TextField fullWidth id="movie-trailer" label="Movie trailer" variant="outlined" onChange={(event) => { setTrailer(event.target.value); }} value={trailer} margin="dense" />

//             <Button fullWidth color="success" margin="normal" variant="contained" onClick={(editMovie)} >Save</Button>
//         </div>
//     )
// }



// using formik



export function EditMovie() {

    const { id } = useParams()
    // const movie = movies[id];
    const [movie, setMovie] = useState(null)

    // const editMovie = (id) => {
    // make a copy of movies and replace edited movie

    useEffect(() => {
        // const updatedMovie = { name, poster, rating, summary, trailer };
        fetch(`${API}/movies/${id}`, {
            method: "GET",

        })
            .then((data) => data.json())
            .then((mv) => setMovie(mv))

    }, [id])


    // untill movie data is available, do not set the form
    return movie ? <UpdateMovie movie={movie} /> : "";
}

function UpdateMovie({ movie }) {

    const history = useHistory();

    const { handleSubmit, values, handleBlur, handleChange, errors, touched } = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            rating: movie.rating,
            summary: movie.summary,
            trailer: movie.trailer
        },
        // using yup
        validationSchema: formValidationSchema,
        onSubmit: (updatedMovie) => {
            // console.log("onSubmit", updatedMovie)

            editMovie(updatedMovie)
        }
    })

    // 1.method - PUT and pass the id
    // 2. body - data & JSON
    // 3. headers - JSON data

    const editMovie = (updatedMovie) => {

        // const updatedMovie = { name, poster, rating, summary, trailer };
        fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: { "Content-type": "application/json" }
        })
            .then(() => history.push("/movies"))
    };

    return (
        <form onSubmit={handleSubmit} className="add-movie-form">
            <h2>Edit Movies</h2>

            <TextField fullWidth onBlur={handleBlur} id="name" name="name" value={values.name} onChange={handleChange} label="Movie name" variant="outlined" margin="dense" error={errors.name && touched.name} />

            {errors.name && touched.name ? errors.name : ""}

            <TextField fullWidth onBlur={handleBlur} id="poster" name="poster" value={values.poster} onChange={handleChange} label="Poster url" variant="outlined" margin="dense" error={errors.poster && touched.poster} />

            {errors.poster && touched.poster ? errors.poster : ""}

            <TextField fullWidth onBlur={handleBlur} id="summary" name="summary" value={values.summary} onChange={handleChange} label="Movie summary" variant="outlined" margin="dense" error={errors.summary && touched.summary} />

            {errors.summary && touched.summary ? errors.summary : ""}

            <TextField fullWidth id="rating" onBlur={handleBlur} name="rating" value={values.rating} onChange={handleChange} label="Movie rating" variant="outlined" margin="dense" error={errors.rating && touched.rating} />

            {errors.rating && touched.rating ? errors.rating : ""}

            <TextField fullWidth id="trailer" onBlur={handleBlur} name="trailer" value={values.trailer} onChange={handleChange} label="Movie trailer" variant="outlined" margin="dense" error={errors.trailer && touched.trailer} />

            {errors.trailer && touched.trailer ? errors.trailer : ""}

            <Button type="submit" fullWidth margin="normal" variant="contained" >Save</Button>
        </form>
    )
}