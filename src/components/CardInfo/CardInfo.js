import React from 'react';
import styled from 'styled-components';
import CalenderInfo from '../CalenderInfo/CalenderInfo';
 
const InfoContainer = styled.div`
width: 800px;
text-align: center;
margin: 0 auto;
padding: 1.5rem 0;
`;

const CardInfo = (props) => {

    return (
        <InfoContainer>
            <h2>{props.titleInfo}</h2>
            <p>{props.descInfo}</p>
            <CalenderInfo 
                calenderDate={props.dateInfo}
                changeDate={props.changeDate}        
             />
             <br/>
             <p>Image Copyright: <i>{props.copyrightInfo}</i></p>
        </InfoContainer>
    );
};

export default CardInfo;