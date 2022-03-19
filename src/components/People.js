import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Person from './Person';

const People = () => {
  const fetchPeople = async () => {
    // const res = await fetch('http://swapi.dev/api/palnets/');

    const res = await axios.get('http://swapi.dev/api/people/');

    // return res.data.json();
    return res.data;
  };
  const { data, isLoading, error, status } = useQuery('peoples', fetchPeople);
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
          {data.results.map((item) => {
            return <Person planet={item} key={item.name} />;
          })}
        </div>
      )}
    </>
  );
};

export default People;
