import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styled from "styled-components";

const Container = styled.div`
max-width: 1000px;
margin: 3.5rem auto;
border-radius: .3rem;
box-shadow: 5px 5px 50px 10px #4C4753;
`;


const CardContainer = () => {
    const [nasaCard, setNasaCard] = useState([]);
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=eaCdXvdhcYLYoDbpsy0HdjT1rooeMEtfbfpiPKfT")
        .then(res => {
            console.log(res.data)
            setNasaCard(res.data)
        })
        .catch(err => {
            console.error("You are getting an error of: ", err); 
        })
    }, [])
    

    console.log(nasaCard);

    return (
        <Container>
            <Card 
                Key={nasaCard.date}
                title={nasaCard.title}
                image={nasaCard.hdurl}
                desc={nasaCard.explanation}
                copyright={nasaCard.copyright}
            />    
        </Container>
    );
};

export default CardContainer;