import React from 'react';
const Student = (props) =>{

    const {fName, lName, studentId} = props;
    return(
        <>
        <b><p>{studentId}</p></b>
        <h5>{fName} {lName}</h5>
        </>
    )
}

export default Student;