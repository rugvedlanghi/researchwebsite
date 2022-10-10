import React from 'react'

const Springer_JC=({title,publisher,abstract}) => {
  return (
    <div className='card'>
        <p className='cardTitle'>{title}</p>
        <p className='cardPubYear'>{publisher}</p>
        <p className='cardDesc'>{abstract}</p>
    </div>
  )
}

export default Springer_JC;