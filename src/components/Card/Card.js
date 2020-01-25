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
        @media(max-width: 768px) {
            width: 20%;
    }

    
  }
    
`;

const CardContainer = styled.div `
background-color: white;
`;

const CardTitle = styled.h1 `
    font-family: 'nasalization';
`;


const Card = (props) => {
    return (
        <CardContainer>
            <CardTitleContainer>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa Logo"/>
                <CardTitle>Image of the Day!</CardTitle>
            </CardTitleContainer>
            <CardImage src={props.image} alt="Nasa pic of the day" />
            <CardInfo 
                descInfo={props.desc}
                copyrightInfo={props.copyright}
                titleInfo={props.title}
                dateInfo={props.date}
                changeDate={props.changeDate}
            />
        </CardContainer>
    );
};

export default Card;