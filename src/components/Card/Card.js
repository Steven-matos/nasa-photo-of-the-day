import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import styled from 'styled-components';

const CardImage = styled.img`
    width: 90%;
    border-radius: .5rem;
    padding-top: 1rem;
`;

const CardTitleContainer = styled.div `
padding: 1rem 0;
background: #3C215E;
color: white;

`;


const Card = (props) => {
    return (
        <div>
            <CardTitleContainer>
                <h1>Nasa's Image of the Day</h1>
                <h2>{props.title}</h2>
            </CardTitleContainer>
            <CardImage src={props.image} alt="Nasa pic of the day" />
            <CardInfo 
                descInfo={props.desc}
                copyrightInfo={props.copyright}
            />
        </div>
    );
};

export default Card;