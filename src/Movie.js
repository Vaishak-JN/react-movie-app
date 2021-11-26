import { useState } from "react";
import { Counter } from "./Counter.js";
import Button from '@mui/material/Button';

export function Movie({ poster, name, summary, rating }) {
    const [show, setShow] = useState(true)
    // const styles = { display: show ? "block" : "none" };


    return (
        <div className="movie-container">
            <img className="poster" src={poster} alt={name} />
            <div className="movie-specs">
                <h2 className="movie-name">{name}</h2>
                <h5 className="rating">⭐ {rating}</h5>
            </div>

            {/* conditional styling */}
            {/* <button className="btn btn-sm btn-outline-dark" onClick={() => setShow(!show)} style={{ margin: "8px 0" }}>{show ? "Hide Description" : "Show Description"}</button> */}
            <Button color="success" variant="outlined" onClick={() => setShow(!show)} style={{ margin: "8px 0" }}>{show ? "Hide Description" : "Show Description"}</Button>
            {/* <p className="summary" style={styles}>{summary}</p> */}

            {/* conditional rendering */}

            {show ? <p className="summary text-muted">{summary}</p> : ""}


            <Counter />
        </div >
    );
}
