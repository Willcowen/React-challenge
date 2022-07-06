import React from 'react';
import Card from '../components/Card';

export default function CardList({ elephants }) {
  return (
    <div className='elephant-container'>
      {elephants.map(function (elephant, index) {
        return (
            <Card
              elephant={elephant}
              key={index}
            />
        );
      })}
    </div>
  );
}
