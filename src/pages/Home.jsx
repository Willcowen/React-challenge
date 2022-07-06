import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import CardList from '../components/CardList'
import dummyData from '../dummyData.json'; // To be replaced with your api response data

export const Home = () => {
  const apiUrl = 'https://elephant-api.herokuapp.com/elephants';
  const missingImgUrl = 'https://elephant-api.herokuapp.com/pictures/missing.jpg'
  const [elephants, setElephants] = useState([])

  useEffect(() => {
    loadElephants();
  }, []);

  const loadElephants = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
       console.log('elephants loaded!', json);
       const elephantsWithImage = json.filter(elephant => elephant.image !== missingImgUrl)
       let elephantsCopy = [...elephants]
       for (let i = 10; i < 20; i++) {
        elephantsCopy.push(elephantsWithImage[i]);
       }
       setElephants(elephantsCopy)
      });
  };
  console.log(elephants)
  return (
    <>
      <h1>Space X Ships</h1>
      <div
        className='App'
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          rowGap: '10px',
          columnGap: '20px',
        }}
      >
        <CardList elephants={elephants} />
      </div>
    </>
  );
};

export default Home;
