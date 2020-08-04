import React from 'react';

const Option = ({ opt, handleAnswer }) => {

  const { id, key, title, wikiLink } = opt

  return (
    <li
      onClick={(e) => handleAnswer(id)}
      tabIndex="0"
    >
      <span>{title}</span>
      <a
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