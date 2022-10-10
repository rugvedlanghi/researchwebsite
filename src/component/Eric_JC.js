import React from 'react'

const Eric_JC=({title,description,publicationyear,author}) => {
  return (
    <div className='card'>
        <p className='cardTitle'>{title}</p>
        <p className='cardPubYear'>{publicationyear}</p>
        <p className='CardAuthor'>{author}</p>
        <p className='cardDesc'>{description}</p>
    </div>
  )
}

export default Eric_JC;