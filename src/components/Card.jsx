import React from 'react'

export default function Card( {title,description,imageUrl} ) {
  return (
    <div className='card'>
      <img src={imageUrl} alt={imageUrl} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
