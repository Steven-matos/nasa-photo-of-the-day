import React from 'react';
import styled from 'styled-components';
 
const InfoContainer = styled.div`
width: 800px;
text-align: center;
margin: 0 auto;
padding-top: 2rem;

`;

const CardInfo = (props) => {

    console.log(props)

    return (
        <InfoContainer>
            <p>{props.descInfo}</p>
            <p>Image Copyright: {props.copyrightInfo}</p>
        </InfoContainer>
    );
};

export default CardInfo;