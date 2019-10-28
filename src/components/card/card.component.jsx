import React from 'react';

import './card.styles.css';

export const Card = (props) => {
  return(
    <div className='card-container'>
      <img alt="robot" src={`https://robohash.org/${props.robot.id}?set=set1`} />
      <h3>{props.robot.name}</h3>
      <p>{props.robot.email}</p>
    </div>
  )
}