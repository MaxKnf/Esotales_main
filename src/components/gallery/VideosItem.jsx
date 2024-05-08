import React from 'react'

function VideosItem({ name, src}) {
  return (
    <div className='videosItem'>
        <div>
      <h2>{name}</h2>
      <iframe
        title={name}
        src={src}
        allowFullScreen
      />
    </div>   
    </div>
  )
}

export default VideosItem