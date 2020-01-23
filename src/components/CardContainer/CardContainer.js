import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card';


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
        <div>
            <h1>Nasa's Image of the Day</h1>
            <Card 
                Key={nasaCard.date}
                title={nasaCard.title}
                image={nasaCard.url}
                desc={nasaCard.explanation}
                copyright={nasaCard.copyright}
            />    
        </div>
    );
};

export default CardContainer;