import colorsList from "../../../scripts/colors";
import { useEffect, useState } from "react";

const Title = () => {
    const [colorInd, setColorInd] = useState(5);
    const [colors, setColors] = useState([colorsList[colorInd - 2], colorsList[colorInd - 1], colorsList[colorInd]]);
    function changeColors() {
        setColorInd((prev) => (prev === colorsList.length - 1 ? 2 : prev + 1));
    }
    useEffect(() => {
        let interval = setInterval(changeColors, 100);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        setColors([colorsList[colorInd - 2], colorsList[colorInd - 1], colorsList[colorInd]]);
    }, [colorInd]);
    return (
        <h1
            style={{ backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]})` }}
            className={
                "text-center w-fit pt-12 text-5xl font-bold text-gradient"
            }
        >Об этом сайте</h1>
    )
}
export default Title