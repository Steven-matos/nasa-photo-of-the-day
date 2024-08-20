import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styled from "styled-components";

const NasaKey = process.env.REACT_APP_NASA_API_KEY;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 850px;
  text-align: center;
  margin: 15rem auto;
  box-shadow: 5px 5px 5px 5px black;

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const CardContainer = () => {
  const moment = require("moment");

  console.log(NasaKey);

  const [nasaCard, setNasaCard] = useState([]);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${NasaKey}&date=${date}`
      )
      .then((res) => {
        setNasaCard(res.data);
      })
      .catch((err) => {
        console.error("You are getting an error of: ", err);
      });
  }, [date]);

  const changeDate = (e) => {
    e.preventDefault();
    let calender = e.target.value;
    if (!moment(calender, "YYYY-MM-DD").isValid()) {
      console.log("Please enter a correct Date Format YYYY-MM_DD");
    } else {
      setDate(calender);
    }
  };

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
