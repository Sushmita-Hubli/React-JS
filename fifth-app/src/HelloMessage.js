import React from 'react';

function HelloMessage(props)
{
    return(
        <>
        <h1>Hello {props.name}. Your age is {props.age}</h1>
<h2>{props.children}</h2>
        <p>Props stands for properties.<br></br>
        Props are arguments passed into React components.<br></br>
        Props are passed to components via HTML attributes. FReact props are like function arguments in js and attributes in HTML.<br></br>
        Props acts like object <br></br>
        If you have a variable to send , and not a string, you just put the variable name inside the curly brackets. <br></br>
        React props are read-only (immutable). you will get an error if you try to change their value. <br></br>
        Props can be used as children props.<br></br>
        props can be used to send data from one Component to another Component.
        </p>

        </>

    );
}
export default HelloMessage;