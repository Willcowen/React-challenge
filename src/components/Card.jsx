import React from "react";

const Card = ({elephant}) => {

  return (
    <div className='elephant-card'>
      <img src={elephant.image} className='elephant-card-img' alt='elephant-picture' />
      <h1>{elephant.name}</h1>
      <h2>{elephant.species}</h2>
      <p>{elephant.note}</p>
    </div>
  )
}

export default Card