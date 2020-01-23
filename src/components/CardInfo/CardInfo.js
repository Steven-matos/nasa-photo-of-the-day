import React from 'react';

const CardInfo = (props) => {

    console.log(props)

    return (
        <div className="info-container">
            <p>{props.descInfo}</p>
            <p>Image Copyright: {props.copyrightInfo}</p>
        </div>
    );
};

export default CardInfo;