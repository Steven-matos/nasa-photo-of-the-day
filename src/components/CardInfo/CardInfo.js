import React from 'react';
import styled from 'styled-components';
 
const InfoContainer = styled.div`
width: 800px;
text-align: center;
margin: 0 auto;
padding: 1.5rem 0;
`;

const CardInfo = (props) => {

    console.log(props)

    return (
        <InfoContainer>
            <h2>{props.titleInfo}</h2>
            <p>{props.descInfo}</p>
            <p>Image Copyright: {props.copyrightInfo}</p>
        </InfoContainer>
    );
};

export default CardInfo;