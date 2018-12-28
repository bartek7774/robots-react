import React from 'react';
import './Card.scss';
import Card from './Card';
import './CardList.scss';

const CardList=({robots})=>{
  // if(1) { throw new Error('Nooo'); }
  return (
    <div className='cards'>
      {
        robots.map((robot,i)=>(
            <Card
              key={i} 
              id={robot.id} 
              name={robot.name} 
              email={robot.email} />
          )
        )
      }
    </div>
  )
}

export default CardList;