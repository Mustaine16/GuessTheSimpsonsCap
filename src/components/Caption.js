import React from 'react';

const Caption = ({ caption, subtitle }) => {
  return (
    <figure className="caption">
      <img
        className="caption__img"
        src={caption.url}
        alt={`Character says: ${subtitle}`} 
      />
      <figcaption>"{subtitle}"</figcaption>
    </figure>
  )
}

export default Caption