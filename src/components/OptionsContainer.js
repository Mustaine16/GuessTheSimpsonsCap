import React, { useState } from 'react';
import { shuffle } from "lodash"

import Option from "./Option"

const OptionsContainer = ({ options, loading, handleAnswer }) => {
  console.log("running optContainer");
  const [shuffled, setShuffled] = useState(shuffle(options))
  return (
    <ul>
      {
        shuffled.map(
          (opt) => <Option opt={opt} handleAnswer={handleAnswer} key={opt.id} />
        )
      }
    </ul>
  )
}

export default OptionsContainer