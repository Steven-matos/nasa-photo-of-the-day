import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styled from "styled-components";

const NasaKey = process.env.REACT_APP_API_KEY

const Container = styled.div`
position: absolute;
left: 200px;
text-align: center;
max-width: 1000px;
margin: 3.5rem auto;
box-shadow: 5px 5px 5px 5px black;

     @media(max-width: 768px) {
    max-width: 350px;
    margin: 4rem auto;
    left: 130px;
  }

  @media(max-width: 1080px) {
    width: 850px;
    left: 40px;
  }

`;


const CardContainer = () => {
    const moment = require('moment');

    const [nasaCard, setNasaCard] = useState([]);
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=eaCdXvdhcYLYoDbpsy0HdjT1rooeMEtfbfpiPKfT&date=${date}`)
        .then(res => {
            setNasaCard(res.data)
        })
        .catch(err => {
            console.error("You are getting an error of: ", err); 
        })
    }, [date])

    const changeDate = e => {
        e.preventDefault();
        let calender = e.target.value;
        if (!moment(calender, 'YYYY-MM-DD').isValid()){
            console.log('Please enter a correct Date Format YYYY-MM_DD');
        } else {
            setDate(calender);
        }
    }

    return (
        <Container>
            <Card 
                Key={nasaCard.date}
                title={nasaCard.title}
                image={nasaCard.hdurl}
                desc={nasaCard.explanation}
                copyright={nasaCard.copyright}
                date={nasaCard.date}
                changeDate={changeDate}
            />    
        </Container>
    );
};

export default CardContainer;