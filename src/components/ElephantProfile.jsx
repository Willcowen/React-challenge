import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ElephantProfile(props) {
  let elephantName = useParams();
    console.log('props:', props)
  console.log('elephant name:', elephantName.name)
  const [elephantProfile, setElephantProfile] = useState([]);
  const proxy = 'https://thingproxy.freeboard.io/fetch/';
  const elephantByNameUrl =
    `https://elephant-api.herokuapp.com/elephants/name/${elephantName.name}`;

    useEffect(() => {
        handleLoadElephantProfile();
      }, []);

  const handleLoadElephantProfile = () => {
    fetch(proxy + elephantByNameUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log('elephant loaded!', json);
        setElephantProfile(json);
      });
      console.log(elephantProfile)
  };

  return (
    <div>
      <h3>{elephantProfile.name}</h3>
      <img
        className='profile-img'
        src={elephantProfile.image}
        alt='elephant-picture'
      />
      <h4>Species: {elephantProfile.species}</h4>
      <h5>{elephantProfile.sex}</h5>
      <p>{elephantProfile.note}</p>
    </div>
  );
}
