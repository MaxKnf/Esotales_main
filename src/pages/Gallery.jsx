import React from 'react'
import { NavLink } from 'react-router-dom'


function Gallery() {
  return (
    <div className='galery'>
      <h1>Gallery</h1> 
      
      <div>
          <NavLink to="/gallery/images">Images</NavLink>
      </div>

      <div>
          <NavLink to="/gallery/videos">Videos</NavLink>
      </div>
    </div>
  )
}

export default Gallery