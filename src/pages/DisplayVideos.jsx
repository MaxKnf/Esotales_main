import React from 'react'
import VideosItem from '../components/gallery/VideosItem'
import {VideosList} from '../components/gallery/VideosList'

function DisplayVideos() {
  return (
    <div className='videosgallery'>
        <h1>Videos Gallery</h1>

        <div className='videosList'>
            {VideosList.map((videos) =>{
                return <VideosItem  name={videos.name} src={videos.src} />
            })}
      </div>
    </div>
  )
}

export default DisplayVideos