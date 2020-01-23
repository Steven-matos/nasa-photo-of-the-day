import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import styled from 'styled-components';

const CardImage = styled.img`
    width: 90%;
    border-radius: .5rem;
    padding-top: 1.5rem;
`;

const CardTitleContainer = styled.div `
    padding: 1rem 0;
    background: #3C215E;
    color: white;
    img {
        width: 15%;
    }
`;

const Card = (props) => {
    return (
        <div>
            <CardTitleContainer>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa Logo"/>
                <h1>Image of the Day!</h1>
            </CardTitleContainer>
            <CardImage src={props.image} alt="Nasa pic of the day" />
            <CardInfo 
                descInfo={props.desc}
                copyrightInfo={props.copyright}
                titleInfo={props.title}
            />
        </div>
    );
};

export default Card;