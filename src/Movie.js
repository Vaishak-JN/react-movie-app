import { useState } from "react";
import { Counter } from "./Counter.js";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";

export function Movie({ poster, name, summary, rating, id, deleteButton, editButton }) {
    const [show, setShow] = useState(true)
    // const styles = { display: show ? "block" : "none" }; 
    // useHistory 
    const history = useHistory()

    return (
        <Card className="movie-container">
            <img className="poster" src={poster} alt={name} />
            <CardContent>
                <div className="movie-specs">
                    <h2 className="movie-name">{name}

                        <IconButton color="success" onClick={() => setShow(!show)} aria-label="ExpandLess">
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>

                        {/* <IconButton color="primary" onClick={() => history.push(`/movies/${index}`)} aria-label="ExpandLess"> */}
                        <IconButton color="primary" onClick={() => history.push(`/movies/${id}`)} aria-label="ExpandLess">
                            <InfoIcon />
                        </IconButton>
                    </h2>
                    <h5 className="rating">⭐ {rating}</h5>
                </div>

                {show ? <p className="summary text-muted">{summary}</p> : ""}

                <CardActions>
                    <Counter />
                    {editButton}
                    {deleteButton}
                </CardActions>
            </CardContent>
        </Card >
    );
}
