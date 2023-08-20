import styled from 'styled-components';
import React, { useState } from 'react';
import Flashcard from "./Flashcard";

const Container = styled.div`
  height: 100vh;
  background-color: #B0E0E6;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-family: Georgia, serif;
  font-size: 50px;
  color: #496A76;
  font-weight: 550;
  text-shadow: 0 0 5px rgba(0, 0, 0.3, 0.2);
  margin-top: 45px;
  margin-bottom: 45px;
`;

function App() {

  const [currentCard, setCurrentCard] = useState(0);

  const [cards, setCards] = useState([
    {
      question: "Meticulously ",
      answer:"In a way that shows great attention to detail; very thoroughly."
    },
    {
      question: "Ablation",
      answer:"The removal of a body part or the destruction of its function"
    },
    {
      question:"Convulse",
      answer:"(Of a person) suffer violent involuntary contraction of the muscles, producing contortion of the body or limbs."
    },
    {
      question: "Disseminate",
      answer:"Spread(something, especially information) widely"
    },
    {
      question: "Sanctimonious",
      answer:"Making a show of being morally superior to other people"
    },
    {
      question: "Avarice",
      answer:"Greed; desire for wealth"
    },
    {
      question: "Corrugated",
      answer:"Shaped into alternating parallel grooves and ridges"
    },
    {
      question:"Porous",
      answer:"Having small holes that allow air or liquid to pass through"
    },
    {
      question:"Putative",
      answer:"Generally regarded as such; reputed; hypothesized, inferred"
    },
    {
      question:"Imprudence",
      answer:"The quality of being unwise, because you fail to consider the possible results of your actions"
    },
  ]);

  const updateCurrentCard = (currentCard) => {
    console.log("---");
    setCurrentCard(currentCard);
  };

  console.log(currentCard);
  return (
    <Container>
      <Heading>Flashcards</Heading>
      <Flashcard
        currentCard={currentCard}
        cards={cards}
        updateCurrentCard={updateCurrentCard}
      ></Flashcard>
    </Container>
  );
}

export default App;

