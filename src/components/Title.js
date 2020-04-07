import React from 'react';

const Title = (props) => {

    const renderTitle = () => {
        if (props.level === "main") {
            return (
                <h1>
                    {props.title}
                </h1>
            )
        }
        return (
            <h2>
                {props.title}
            </h2>
        )
    }

    return (
        <div className="main-title">
            {renderTitle()}
            {/* {
                props.level === "main" ? <h1>{props.title}</h1> : <h2>{props.title}</h2>
            } */}
        </div>
    );
}

export default Title;
