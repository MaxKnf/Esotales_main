import React from 'react'
import ImagesItem from '../components/gallery/ImagesItem'
import {ImagesList} from '../components/gallery/ImagesList'


function DisplayImages() {
  return (
    <div className='imagesgallery'>
        <h1>Images Gallery</h1>

        <div className='imagesList'>
            {ImagesList.map((images) =>{
                return <ImagesItem  name={images.name} image={images.image} />
            })}
      </div>
    </div>
  )
}

export default DisplayImages