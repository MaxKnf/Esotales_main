import React from 'react'
import { useNavigate } from 'react-router-dom'

function NewsItem({name, id, overview, imgOverview}) {

    const navigate = useNavigate();

    return (
      <div className='newsItem' 
        onClick={() => {
          navigate("/news/" + id)
      }}
        style={{
            width: "30%",
        }}
      >
          <h3>{name}</h3>
          <div>{imgOverview}</div>
          <div>{overview}</div>
      </div>
    )
}

export default NewsItem