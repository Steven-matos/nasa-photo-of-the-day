import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styled from "styled-components";

const NasaKey = process.env.REACT_APP_API_KEY

const Container = styled.div`
max-width: 1000px;
margin: 7rem auto;
box-shadow: 5px 5px 20px 20px black;

     @media(max-width: 768px) {
    max-width: 350px;
    margin: 4rem auto;
  }

  @media(max-width: 1080px) {
    width: 850px;
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