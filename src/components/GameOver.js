import React from 'react';

import "./css/GameOver.css"

const GameOver = ({ score, handleRestartGame }) => {
  return (
    <>
      <figure className="gameOver">
        <p>Your score: {score}</p>
        <img
          className="gameOver__img"
          src={process.env.PUBLIC_URL + "/game-over.gif"}
        />
      </figure>
      <button className="gameOver__resetButton" onClick={handleRestartGame}>RESTART</button>
    </>
  )
}

export default GameOver