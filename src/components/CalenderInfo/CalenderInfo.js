import React from 'react';
import styled from 'styled-components';

const CalenderContainer = styled.form `
    margin: 0 auto;
    width: 30%;

`;


const CalenderInfo = (props) => {
    return (
        <CalenderContainer>
            <h4>See another date</h4>
            <input onChange={(e) => {
                props.changeDate(e)
            }} id="date.picker" type="date"  value={props.calenderDate} />
        </CalenderContainer>
    );
};

export default CalenderInfo;