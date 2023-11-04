import React from 'react';
const Welcome = (props) =>{

    const {csName, csInfo} = props;
    return(
        <>
        <h1>Welcome to {csName}</h1>
        <h2>React JS Programming {csInfo}</h2>
        </>
    )
}

export default Welcome;