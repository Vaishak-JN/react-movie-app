// **********************
import { useState } from "react";
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
            <button className="btn  btn-lg btn-outline-none" onClick={() => setLike(like + 1)}><i class="bi bi-hand-thumbs-up-fill text-warning"></i> {like}</button>
            <button className="btn btn-lg btn-outline-none" onClick={() => setDisLike(disLike + 1)}><i class="bi bi-hand-thumbs-down-fill text-warning"></i> {disLike}</button>
        </div>
    )
}