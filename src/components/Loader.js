import React from 'react';

import "./css/Loader.css"

const Loader = () => {
  return (
    <figure className="loader">
      <img
        className="loader__img"
        src={process.env.PUBLIC_URL + "/donut-loader.png"}
        alt="Loading"
      />
    </figure>

  )
}

export default Loader