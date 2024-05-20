import React from 'react'
import "./ImagesItem.css"

function ImagesItem({ image, name}) {
  return (
    <div className='imagesItem'>
        <h2>{name}</h2>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>   
    </div>
  )
}

export default ImagesItem