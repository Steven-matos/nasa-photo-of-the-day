import React from 'react';
import styled from 'styled-components';

const CalenderContainer = styled.form `
    margin: 0 auto;
    width: 30%;

`;


const CalenderInfo = (props) => {
    console.log(props)
    return (
        <CalenderContainer onChange={props.changeDate}>
            <h4>See another date</h4>
            <input type="text" data-role="calendarpicker"
                data-input-format="%y/%m/%d" value={props.calenderDate} />
        </CalenderContainer>
    );
};

export default CalenderInfo;