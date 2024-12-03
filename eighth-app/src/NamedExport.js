import React from 'react';

function Named1()
{
    return(
<h1>Named export 1</h1>
    );
}

function Named2()
{
    return(
<h1>Named export 2</h1>
    );
}

export {Named1,Named2}; //here we are doing Named Export