import React from 'react'

function Defaultone()
{
    return(
        <h1>default export</h1>
    );
}

function NamedExportone()
{
    return(
        <h1>named export one</h1>
    
    );
}
export {NamedExportone};
export default Defaultone;