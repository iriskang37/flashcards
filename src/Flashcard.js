import styled from 'styled-components';
import React, {useState} from 'react';
import Left from "./left.png";
import Right from "./right.png";

const SubContainer = styled.div`
    width: 720px;
    height: 420px;
    background-color: #F6F3E8;
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Question = styled.div`
    font-family: Georgia, serif;
    font-size: 40px;
    color: black;
    font-weight: 550;
    text-alingn: center;
`;

const Answer = styled.div`
    font-family: Georgia, serif;
    font-size: 25px;
    color: black;
    font-weight: 550;
    text-align: center;
`;

const RightArrow = styled.img`
  width: 50px;
  position: absolute;
  right: 0;
  margin-right: 10px;
`;
const LeftArrow = styled.img`
  width: 50px;
  position: absolute;
  left: 0;
  margin-left: 10px;
`;

function Flashcard({currentCard, cards, updateCurrentCard}) {
    const [clicked, setClicked]=useState(false);
    const clickCard = () => {
        setClicked(!clicked);
    };

    const clickedArrow = (type) => {
        if (type == "left" && currentCard != 0) {
          updateCurrentCard(currentCard - 1);
        }
        if (type == "right" && currentCard + 1 < cards.length) {
          updateCurrentCard(currentCard + 1);
        }
      };
    
    return(
        <SubContainer>
            <LeftArrow src={Left} onClick={() => clickedArrow("left")}></LeftArrow>
            {clicked==false?(
            <Question onClick={clickCard}>{cards[currentCard].question}</Question>
            ):(
            <Answer onClick={clickCard}>{cards[currentCard].answer}</Answer>
            )}
            <RightArrow src={Right} onClick={() => clickedArrow("right")}></RightArrow>
        </SubContainer>
    );
};

export default Flashcard;