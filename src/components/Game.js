import React, { useState } from 'react';

import GameProgress from "./GameProgress"
import QuizContainer from "./QuizContainer"

const Game = () => {

  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false)

  const nextRound = (a,b) => {
    console.log(a , " ", b);
    setRound((round) => round+1)
  }

  if (gameOver) {
    setTimeout(()=>{setRound(1);setGameOver(false)},500)
    return `YOU LOST, your score: ${round-1}`
  }

  if (round === 11) return "YOU WIN"

  return (
    <main>
      <GameProgress round={round} />
      <QuizContainer
        round={round}
        nextRound={nextRound}
        setGameOver={setGameOver}
      />
    </main>
  )

}

export default Game