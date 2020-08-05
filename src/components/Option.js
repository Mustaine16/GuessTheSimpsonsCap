import React, { useRef } from 'react';

const Option = ({ opt, handleAnswer }) => {

  const { id, key, title, wikiLink } = opt
  const optionRef = useRef()

  return (
    <li
      className="option"
      onClick={(e) => handleAnswer(id, optionRef)}
      ref={optionRef}
      tabIndex="0"
    >
      <span>{title}</span>
      <a
        className="option__info"
        href={wikiLink}
        rel="noopener noreferrer"
        target="_blank"
        onClick={e => e.stopPropagation()}
      >
        <img src={"info.svg"} width="15px" />
      </a>
    </li>
  )
}

export default Option