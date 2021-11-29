import { useState } from "react";

export function AddColor() {

    const [color, setColor] = useState("aqua");
    const styles = { backgroundColor: color };

    const [colors, setColors] = useState(["pink", "orange", "crimson"]);
    return (
        <div>
            <input placeholder="Enter a color" style={styles} onChange={(event) => setColor(event.target.value)} />
            <button onClick={() => setColors([...colors, color])}>Add Color</button>

            {colors.map((clr, index) => <ColorBox key={index} color={clr} />)}

        </div>
    );
}
function ColorBox({ color }) {
    const styles = { backgroundColor: color, height: "100px", width: "300px", margin: "20px" };
    return (
        <div style={styles}></div>
    );
}
