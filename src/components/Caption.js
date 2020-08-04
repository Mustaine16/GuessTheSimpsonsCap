import React from 'react';

const Caption = ({ caption, subtitle }) => {
  return (
    <figure>
      <img src={caption.url} alt={`Character says: ${subtitle}`} />
    </figure>
  )
}

export default Caption