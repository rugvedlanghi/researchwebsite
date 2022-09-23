import React from 'react'

const Journal_component=({title,publisher,abstract}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{abstract}</p>
        <p>{publisher}</p>
    </div>
  )
}

export default Journal_component;