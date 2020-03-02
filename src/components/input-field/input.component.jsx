import React from 'react';
import './input.style.css'

export const InputField = (props) => {

    return (
        <span className="search">
            <input type="search" placeholder={props.placeholder} onChange={props.handleChange} />
        </span>
    )


}