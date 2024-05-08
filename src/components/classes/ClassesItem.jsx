import * as React from 'react';
import './ClassesItem.css'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

export default function ClassesItem({ image, name, id}) {
  const navigate = useNavigate();


  return (
    <Card className='classe-card-item' 
    onClick={() => {
      navigate("/classes/" + id)
    }}>
      <CardMedia
        sx={{ height: 250 }}
        image={image}
        title={name}
      />
      <CardContent className='classe-card-content'>
        <Typography gutterBottom variant="h4" component="div">
         {name}
        </Typography>
      </CardContent>
    </Card>
  );
}