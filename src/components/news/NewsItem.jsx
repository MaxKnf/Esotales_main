import React from 'react'
import "./NewsItem.css"
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function NewsItem({name, id, overview, imgOverview}) {

    const navigate = useNavigate();

    const handleClick = () => {
    
      navigate("/news/" + id)
  
      
      window.scrollTo(0, 0);
    };

    return (
      <Card className='news-card-item' onClick={handleClick}>
        <CardContent className='news-card-content'>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <CardMedia
            className='news-img-overview'
            component="img"
            sx={{ height: 250 }}
            image={imgOverview}
            title={name}
          />

          <Typography className='overview' gutterBottom variant="p" component="div">
            {overview}
          </Typography>
      </CardContent>
          
          {/* <div>{overview}</div> */}
      </Card>
    )
}

export default NewsItem