import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { API } from "./global"


// export function AddMovie({ movies, setMovies }) {
// export function AddMovie() {

//     const [name, setName] = useState("");
//     const [poster, setPoster] = useState("");
//     const [summary, setSummary] = useState("");
//     const [rating, setRating] = useState("");
//     const [trailer, setTrailer] = useState("")

//     const history = useHistory();

//     const newPath = () => {
//         history.push("/movies");
//     };

//     // no need as route is changed
//     // const clearInputs = () => {
//     //     setName("");
//     //     setPoster("");
//     //     setSummary("");
//     //     setRating("");
//     // };

//     const addMovie = () => {
//         const newMovie = { name, poster, rating, summary, trailer };
//         // console.log(newMovie);
//         // setMovies([...movies, newMovie]);
//         // clearInputs();
//         // newPath();

//         fetch(`https://61a8d90a33e9df0017ea3ba9.mockapi.io/movies`, {
//             method: "POST",
//             body: JSON.stringify(newMovie),
//             headers: { "Content-type": "application/json" }
//         })
//             .then(() => history.push("/movies"))
//     };

//     return (
//         <div className="add-movie-form">
//             <h2>Add Movies here</h2>
//             <TextField fullWidth id="movie-name" label="Movie name" variant="outlined" onChange={(event) => { setName(event.target.value); }} value={name} margin="dense" />

//             <TextField fullWidth id="movie-poster" label="Poster url" variant="outlined" onChange={(event) => { setPoster(event.target.value); }} value={poster} margin="dense" />

//             <TextField fullWidth id="movie-summary" label="Movie summary" variant="outlined" onChange={(event) => { setSummary(event.target.value); }} value={summary} margin="dense" />

//             <TextField fullWidth id="movie-rating" label="Movie rating" variant="outlined" onChange={(event) => { setRating(event.target.value); }} value={rating} margin="dense" />

//             <TextField fullWidth id="movie-trailer" label="Movie trailer" variant="outlined" onChange={(event) => { setTrailer(event.target.value); }} value={trailer} margin="dense" />

//             <Button fullWidth margin="normal" variant="contained" onClick={addMovie}>Add Movie</Button>
//         </div>
//     );
// }




// using formik

import { useFormik } from "formik"
import * as yup from 'yup';

export const formValidationSchema = yup.object({
    name: yup.string().required("Name the movie"),
    poster: yup.string().required("Give the poster link").min(5, "Need a bigger poster"),
    rating: yup.number().min(0, "a good rating would be nice").max(10, "Is the movie that good?").required("How much is the movie rated?"),
    summary: yup.string().required("Whats the movie about?").min(20, "Need a bigger summary"),
    trailer: yup.string().required("Drop the trailer link here").min(5, "Need a bigger Trailer")
})

export function AddMovie() {


    const navigate = useNavigate();


    const { handleSubmit, values, handleBlur, handleChange, errors, touched } = useFormik({
        initialValues: {
            name: "",
            poster: "",
            rating: "",
            summary: "",
            trailer: ""
        },


        // using yup
        validationSchema: formValidationSchema,
        onSubmit: (newMovie) => {
            console.log("onSubmit", newMovie)

            addMovie(newMovie)
        }


    })

    const addMovie = (newMovie) => {
        // const newMovie = { name, poster, rating, summary, trailer };


        fetch(`${API}/movies`, {
            method: "POST",
            body: JSON.stringify([newMovie]),
            headers: { "Content-type": "application/json" }
        })
            .then(() => navigate("/movies"))
    };

    return (
        <form onSubmit={handleSubmit} className="add-movie-form">
            <h2>Add Movies here</h2>

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

            <Button type="submit" fullWidth margin="normal" variant="contained" >Add Movie</Button>
        </form>
    );
}