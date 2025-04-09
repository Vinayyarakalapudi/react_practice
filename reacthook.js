import { useState } from "react";
import ReactDOM from "react-dom/client";
function FavoriteColor() {
const [color, setColor] = useState("red");
return (
<>
<h1>USE STATE HOOK</h1>
<h3>My favorite color is {color}!</h3>
<button type="button" onClick={() => setColor("blue")}>Blue</button>
<button type="button" onClick={() => setColor("red")}>red</button>
</>
)
}
export default FavoriteColor;