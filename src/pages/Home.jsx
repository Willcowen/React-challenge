import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';

export const Home = () => {
  
  //CORS error when making 'GET' request to API, so API endpoint 'pre-fixed' with proxy.
  const apiUrl = 'https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants';
  const missingImgUrl =
    'https://elephant-api.herokuapp.com/pictures/missing.jpg';
  const [elephants, setElephants] = useState([]);

  useEffect(() => {
    loadElephants();
  }, []);

  const loadElephants = () => {
    const options = {
      // We want to send an HTTP POST (GET is the default for fetch)
      method: 'GET', 
      //We need to tell the server we are sending JSON
      headers : {
        'Content-Type' : 'application/json',
        'Access-Control-Request-Headers' : 'Content-Type, Accept',
        'Origin' : 'http://localhost:8080'
      },
      //Specify the request body: the data we want to send with the request. In this
      //case we are send a JavaScript object as a JSON string using JSON.stringify
    }
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log('elephants loaded!', json);
        const elephantsWithImage = json.filter(
          (elephant) => elephant.image !== missingImgUrl
        );
        let elephantsCopy = [...elephants];
        for (let i = 10; i < 20; i++) {
          elephantsCopy.push(elephantsWithImage[i]);
        }
        setElephants(elephantsCopy);
      });
  };
  console.log(elephants);
  return (
    <>
      <h1>All About Elephants!</h1>
      <div className='App'>
        <CardList elephants={elephants} />
      </div>
    </>
  );
};

export default Home;
