import React from 'react';
import './Card.scss';

const Card=({name,email,id})=>{
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
      <div>
        <h2 className="card__name">{name}</h2>
        <p className="card__email">{email}</p>
      </div>
    </div>
  )
}

export default Card;