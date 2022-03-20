import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Planet from './Planet';

const Planets = () => {
  const fetchPlanets = async () => {
    // const res = await fetch('http://swapi.dev/api/palnets/');

    // const res = await axios.get('http://swapi.dev/api/planets/');
    const res = await axios.get(
      'https://sohee.springgo.io/api/reservations/summary',
      {
        auth: {
          username: 'admin@aspringcloud.com',
          password: 'spring#007',
        },
      }
    );
    console.log('결과', res);
    // return res.data.json();
    return res.data;
  };
  const { data, isLoading, error, status } = useQuery('planets', fetchPlanets);

  console.log('data', data);
  console.log('status', status);
  console.log('isLoading', isLoading);
  console.log('error', error);
  return (
    <>
      {status === 'loading' && <div>데이터 로딩중...</div>}

      {status === 'error' && <div>데이터 GET 오류</div>}

      {status === 'success' && (
        <div>
          {data.map((item) => {
            return <Planet planet={item} key={item.name} />;
          })}
        </div>
      )}
    </>
  );
};

export default Planets;
