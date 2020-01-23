import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

const Card = (props) => {
    return (
        <div className="card-container">
            <h2>{props.title}</h2>
            <img src={props.image} alt="Nasa pic of the day" />
            <CardInfo 
                descInfo={props.desc}
                copyrightInfo={props.copyright}
            />
        </div>
    );
};

export default Card;