import React from 'react'
import "./VideosItem.css"

function VideosItem({ name, src}) {
  return (
    <div className='videosItem'>
      <h2>{name}</h2>
        <iframe className='iframe'
        title={name}
        src={src}
        allowFullScreen
        />   
    </div>
  )
}

export default VideosItem