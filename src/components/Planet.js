import React from 'react';

const Planet = ({ planet }) => {
  //   React.useEffect(() => {}, [planet]);

  return (
    <div className="card">
      {/* <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p> */}
      <h3>예약자: {planet.name}</h3>
      <p>탑승인원: {planet.adult_num}</p>
      <p>출발지: {planet.station}</p>
      <p>도착지: {planet.destination}</p>
    </div>
  );
};

export default Planet;
