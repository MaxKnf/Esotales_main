import React from 'react'
import './GuidesItem.css'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function BeginnerItem({name, id}) {
    const navigate = useNavigate();

    const handleClick = () => {
    
      navigate("/guides/beginner/" + id)
  
      
      window.scrollTo(0, 0);
    };

    return (
      <Button variant="text" className='guideItem' 
        onClick={handleClick}>
          <h3><ArrowRightIcon />{name}</h3>
      </Button>
    )
}

export default BeginnerItem