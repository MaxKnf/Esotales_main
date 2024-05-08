import React from 'react'
import { useNavigate } from 'react-router-dom'

function CraftingItem({name, id}) {
    const navigate = useNavigate();
    return (
      <div className='combatItem' 
        onClick={() => {
          navigate("/guides/crafting/" + id)
      }}>
          <h3>{name}</h3>
      </div>
    )
}

export default CraftingItem