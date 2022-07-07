import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';

export const Home = () => {

  //CORS error when making 'GET' request to API, so API endpoint 'pre-fixed' with proxy.
  const proxy = 'https://thingproxy.freeboard.io/fetch/'
  const apiUrl = 'https://elephant-api.herokuapp.com/elephants';
  const missingImgUrl =
    'https://elephant-api.herokuapp.com/pictures/missing.jpg';
  const [elephants, setElephants] = useState([]);

  useEffect(() => {
    loadElephants();
  }, []);

  const loadElephants = () => {

    fetch(proxy + apiUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log('elephants loaded!', json);
        const elephantsWithImage = json.filter(
          (elephant) => elephant.image !== missingImgUrl && elephant.species !== 'Unavailable' 
        );
        let elephantsCopy = [...elephants];
        for (let i = 0; i < 20; i++) {
          if (elephantsWithImage[i].name.length <= 5) {
          elephantsCopy.push(elephantsWithImage[i]);
          }
        }
        setElephants(elephantsCopy);
      });
  };
  console.log(elephants);
  return (
    <>
      <h1 className="title">All About Elephants</h1>
      <div className='App'>
        <CardList elephants={elephants} />
      </div>
    </>
  );
};

export default Home;
