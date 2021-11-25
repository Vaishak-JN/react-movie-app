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
            <button onClick={() => setLike(like + 1)}>👍 {like}</button>
            <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
        </div>
    )
}