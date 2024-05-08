import React from 'react'

function ImagesItem({ image, name}) {
  return (
    <div className='imagesItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h2>{name}</h2>   
    </div>
  )
}

export default ImagesItem