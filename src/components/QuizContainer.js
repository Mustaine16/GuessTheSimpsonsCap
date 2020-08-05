import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Quiz from "./Quiz"

const QuizContainer = ({ round, nextRound, setGameOver }) => {

  const RANDOM_SEARCH_URL = "https://jsonp.afeld.me/?url=https://frinkiac.com/api/random"
  const FRAME_URL = "https://frinkiac.com/img/" //S01E01/Frame["TimeStamp"]

  const [caption, setCaption] = useState("")
  const [options, setOptions] = useState("")
  const [loading, setLoading] = useState(true)
  const [userAnswer, setUserAnswer] = useState()

  //Get new Options every round
  useEffect(() => { fetchNewOptions() }, [round])

  //Check Duplicates options, and fetch new ones if necessary
  useEffect(() => {

    checkDuplicate(options)
      ? fetchNewOptions()
      : options && saveCaption(options[0])

  }, [options])

  //Check the user answer
  useEffect(() => {
    if (userAnswer) {
      (userAnswer === caption.id)
        ? nextRound()
        : setGameOver(true);
    }
    setUserAnswer("")
  }, [userAnswer])

  async function fetchRandomEpisode() {
    try {
      const response = await axios.get(RANDOM_SEARCH_URL)
      return response.data
    } catch (error) {
      console.log(error);
    }

  }

  async function fetchNewOptions() {
    console.log("fetching new answers");
    const newOptions = []

    setLoading(true)

    for (let i = 0; i < 4; i++) {

      const data = await fetchRandomEpisode();

      const { Title, Key, Id, WikiLink } = data.Episode

      const opt = {
        title: Title,
        key: Key,
        id: Id,
        wikiLink: WikiLink,
        timestamp: data.Frame.Timestamp,
        subtitle: data.Subtitles[0]?.Content
      }
      newOptions.push(opt)
    }

    setOptions(newOptions)
    setLoading(false)
  }

  function saveCaption(ep) {
    setCaption({
      id: ep.id,
      url: `${FRAME_URL}${ep.key}/${ep.timestamp}`
    })
  }

  function checkDuplicate(options) {

    if (!options || !options.length) return false

    //Create new array with episodes's keys
    const episodes = options.map(ans => ans.id)

    //Loop that array looking for duplicated values
    return episodes.some((ep) => episodes.indexOf(ep) !== episodes.lastIndexOf(ep))

  }

  function handleAnswer(answerId) {
    setUserAnswer(answerId)
  }

  if (loading) return "LOADING"

  return (
    <Quiz
      caption={caption}
      subtitle={options && options[0].subtitle}
      options={options}
      loading={loading}
      handleAnswer={handleAnswer}
    >
    </Quiz>
  )

}



export default QuizContainer