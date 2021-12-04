// **********************
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
// like counter
export function Counter() {
    // const like=0;
    // state - current state- current data in web app
    // const [state,setstate] = useState(initial value)
    // setstate updates the state
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)
    const incrementLike = () => setLike(like + 1)
    const incrementDisLike = () => setDisLike(disLike + 1)


    return (
        <div className="btn-container">

            {/* <Button variant="text" onClick={() => setLike(like + 1)}>👍 {like}</Button>
            <Button variant="text" onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</Button> */}
            <IconButton color="primary" aria-label="like" onClick={incrementLike}>
                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>
            </IconButton>

            <IconButton color="error" aria-label="dislike" onClick={incrementDisLike}>
                <Badge badgeContent={disLike} color="error">
                    👎
                </Badge>
            </IconButton>

        </div>
    )
}

