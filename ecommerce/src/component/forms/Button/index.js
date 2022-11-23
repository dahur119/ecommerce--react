import React from "react";
import './style.scss'

function Button({children, ...props}){
    return (
        <button className="btn" {...props} >
            {children}
        </button>
    )
}
export default Button