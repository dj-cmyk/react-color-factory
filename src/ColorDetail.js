import React from "react";
import { useParams, Link } from "react-router-dom";

const ColorDetail = ({colors}) => {
    const { color } = useParams();
    
    return (
        <div style={{
            backgroundColor: colors[0].color, 
            height: '100vh'
        }}>
            <h1>This is {color}</h1>
            <Link to="/colors">Go Back To All Colors</Link>
        </div>
    )
}

export default ColorDetail;