import React from 'react'
import { useNavigate } from 'react-router-dom'

function BeginnerItem({name, id}) {
    const navigate = useNavigate();
    return (
      <div className='beginnerItem' 
        onClick={() => {
          navigate("/guides/beginner/" + id)
      }}>
          <h3>{name}</h3>
      </div>
    )
}

export default BeginnerItem