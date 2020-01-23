import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import styled from 'styled-components';

const CardImage = styled.img`
    width: 90%
`;


const Card = (props) => {
    return (
        <div className="card-container">
            <h1>Nasa's Image of the Day</h1>
            <h2>{props.title}</h2>
            <CardImage src={props.image} alt="Nasa pic of the day" />
            <CardInfo 
                descInfo={props.desc}
                copyrightInfo={props.copyright}
            />
        </div>
    );
};

export default Card;