import React from 'react'
import "./Gallery.css"
import { NavLink } from 'react-router-dom'
import imgIcon from "../icons/image.png"
import vidIcon from "../icons/video.png"


function Gallery() {

  const handleClick = () => {

    
    window.scrollTo(0, 0);
  };

  return (
    <div className='galery'>
      <h1>Gallery</h1> 
      
      <div className='gallery-link-container'>
          <NavLink className="gallery-link" to="/gallery/images" onClick={handleClick}>
            <h2>Images</h2>
            <img src={imgIcon} alt="images" />
          </NavLink>
      </div>

      <div className='gallery-link-container'>
          <NavLink className="gallery-link" to="/gallery/videos" onClick={handleClick}>
            <h2>Videos</h2>
            <img src={vidIcon} alt="videos" style={{color:"white"}} />
          </NavLink>
          
      </div>
    </div>
  )
}

export default Gallery