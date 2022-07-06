import React from "react";

const Card = ({ elephant }) => {

  return (
    <li className='elephant-card' >
      <h1>{elephant.name}</h1>
      <img className='card-img' src={elephant.image} alt='elephant-picture' />
      <h2>Species: {elephant.species}</h2>
      <p>{elephant.note}</p>
    </li>
  )
}

export default Card