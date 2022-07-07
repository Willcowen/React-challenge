import React from "react";
import { useNavigate } from 'react-router-dom';

const Card = ({ elephant }) => {

  let navigate = useNavigate();
  return (
    <li className='elephant-card' onClick={() => navigate(`/elephant/${elephant.name}`)}>
      <h1>{elephant.name}</h1>
      <img className='card-img' src={elephant.image} alt='elephant-picture' />
      <h2>Species: {elephant.species}</h2>
      <p>{elephant.note}</p>
    </li>
  )
}

export default Card