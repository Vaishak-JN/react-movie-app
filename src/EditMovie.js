import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFormik } from "formik"

import { formValidationSchema } from "./AddMovie";
import { API } from "./global"


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
        fetch(`${API}/movies/${movie._id}`, {
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