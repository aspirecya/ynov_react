import React from 'react';

const Button = (props) => {
    return (
        <button className={props.class} onClick={props.event}>
            {props.text}
        </button>
    );
}

export default Button;
