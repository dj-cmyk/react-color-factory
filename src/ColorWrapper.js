import React from "react";
import { useParams, Redirect } from "react-router-dom";
import ColorDetail from './ColorDetail';


const ColorWrapper = ({colors}) => {
    const { color } = useParams();
    const thisColor = colors.filter(c => c.colorName === color)
    
    return (
        <>
        {thisColor.length !== 0 ? 
            <ColorDetail colors={thisColor} /> 
            : 
            <Redirect to={{
                pathname: "/colors",
                state: { colors: [...colors] }
              }} />}
        </>
    )
}

export default ColorWrapper;