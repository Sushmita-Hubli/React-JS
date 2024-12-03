import React from 'react';


function Header()
{
    return(  //this opening bracket after react should be written afterc return statement only otherwise we wont be able to render that component in our index.html file via index.js file
        <header>
            <h1>This is header</h1>
        </header>

    );
}

export default Header;