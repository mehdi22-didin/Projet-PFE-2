import React from "react";
import Result from "./Result";

const Results = ({indices}) => {
    <ul style={{listStyleType: "none"}}>
        {indices.map(j => { return <Result indice={j} key={j.id} />;
    })}

    </ul>
}
export default Results;
