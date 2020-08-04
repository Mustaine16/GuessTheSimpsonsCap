import React from 'react';

import Caption from "./Caption"
import OptionsContainer from "./OptionsContainer"

import "./css/Quiz.css"

const Quiz = ({caption, subtitle, options, loading, handleAnswer}) => {
  return (
    <>
      <Caption caption={caption} subtitle={subtitle} />
      <OptionsContainer
        options={options}
        loading={loading}
        handleAnswer={handleAnswer}
      />
    </>
  )
}

export default Quiz