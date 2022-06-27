import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Emoji from "./Emoji";
import {emojis} from "../emojis"
import EmojiButton from "./EmojiButton";
import EmojiBubble from "./EmojiBubble";

const EmojiBoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  padding-top: 15px;
`;

const BoardTitle = styled.h2`
  display: flex;
  justify-content: center;
`

const EmojiLabel = styled.h3`
  display: flex;
  justify-content: center;
`

const EmojiBoard = () => {

  const [emojiQueue, setEmojiQueue] = useState([]);

  useEffect(() => {
    console.log(emojiQueue);
  }, [emojiQueue]);

  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomPosOrNeg = (max, min) => {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    randomNum *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

    return randomNum;
  };

  let popAudio = new Audio("pop.mp3");

  const handleEmojiClick = (label, symbol) => {
    popAudio.play();
    setEmojiQueue([
      ...emojiQueue,
      {
        label,
        symbol,
        size: randomNumber(3, 2),
        left: randomNumber(100, 0),
        one: randomPosOrNeg(200, 50),
        two: randomPosOrNeg(200, 50)
      }
    ]);
  };

  const handleEmojiKeyDown = (e, label, symbol) => {
    popAudio.play();
    setEmojiQueue([
      ...emojiQueue,
      {
        label,
        symbol,
        size: randomNumber(3, 2),
        left: randomNumber(100, 0),
        one: randomPosOrNeg(200, 50),
        two: randomPosOrNeg(200, 50)
      }
    ]);
  };

  return (
    <>
      <div>
        <BoardTitle>Select Your Mood: </BoardTitle>
        <EmojiBoardWrapper>
          {emojis.map(({ label, symbol }, idx) => (
            <div>
              <EmojiLabel>{label}</EmojiLabel>
              <EmojiButton
                key={idx}
                onClick={() => handleEmojiClick(label, symbol)}
                onKeyDown={(e) => handleEmojiKeyDown(e, label, symbol)}
              >
                <Emoji label={label} symbol={symbol} size="3rem" />
              </EmojiButton>
            </div>
          ))}
        </EmojiBoardWrapper>
      </div>

      <div>
        {emojiQueue.map(({ label, symbol, size, left, one, two }, idx) => (
          <EmojiBubble
            key={idx}
            label={label}
            symbol={symbol}
            size={size}
            left={left}
            one={one}
            two={two}
          />
        ))}
      </div>
    </>
  );
};

export default EmojiBoard;
