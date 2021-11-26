// **********************
import { useState } from "react";
import Button from '@mui/material/Button';
// like counter
export function Counter() {
    // const like=0;
    // state - current state- current data in web app
    // const [state,setstate] = useState(initial value)
    // setstate updates the state
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)

    return (
        <div className="btn-container">

            <Button variant="text" onClick={() => setLike(like + 1)}>👍 {like}</Button>
            <Button variant="text" onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</Button>

        </div>
    )
}

