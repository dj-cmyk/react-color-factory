import React from "react";
import { Link } from "react-router-dom";

const Colors = ({colors}) => {
    const colorList = colors.map((c) => (<h3><Link to={`/colors/${c.colorName}`}>{c.colorName}</Link></h3>))
    return (
        <>
        <h1>Color List</h1>
        {colorList}
        </>
    )
}

export default Colors;