import React, { useState } from 'react';

import GameProgress from "./GameProgress"
import QuizContainer from "./QuizContainer"
import GameOver from "./GameOver"

const Game = () => {

  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false)

  const nextRound = (a,b) => {
    console.log(a , " ", b);
    setRound((round) => round+1)
  }

  const handleRestartGame = () => {
    setRound(1);
    setGameOver(false)
  }

  if (gameOver) return <GameOver score={round-1} handleRestartGame={handleRestartGame}/>

  return (
    <>
      <GameProgress round={round} />
      <QuizContainer
        round={round}
        nextRound={nextRound}
        setGameOver={setGameOver}
      />
    </>
  )

}

export default Game