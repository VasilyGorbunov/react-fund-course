import classes from './MyInput.module.css'
import React from "react";
const MyInput = (props) => {
    return (
        <input
            {...props}
            className={classes.myInput}
        />
    );
};

export default MyInput;