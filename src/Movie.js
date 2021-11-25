import { useState } from "react";
import { Counter } from "./Counter.js";

export function Movie({ poster, name, summary, rating }) {
    const [show, setShow] = useState(true)
    const styles = { display: show ? "block" : "none" };

    return (
        <div className="movie-container">
            <img className="poster" src={poster} alt={name} />
            <div className="movie-specs">
                <h2 className="movie-name">{name}</h2>
                <h4 className="rating">⭐ {rating}</h4>
            </div>
            <button onClick={() => setShow(!show)} style={{ margin: "8px 0" }}>{show ? "Hide Description" : "Show Description"}</button>
            <p className="summary" style={styles}>{summary}</p>
            <Counter />
        </div >
    );
}
