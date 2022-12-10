import React, { useState } from "react";

export const DetailContext = React.createContext();

export const DetailProvider = (props) => {
    const [Detail, setDetail] = useState([]);
    return (
        <DetailContext.Provider value={[Detail,setDetail]}>
            {props.children}
        </DetailContext.Provider>

    )
}