import React from 'react'
import "./News.css"
import { useState } from 'react';
import NewsItem from '../components/news/NewsItem'
import { NewsList } from '../components/news/NewsList'
import Button from '@mui/material/Button'

function News() {
    const initialLimit = 4;
    const [limit, setLimit] = useState(initialLimit);
    const showMore = () => {
      setLimit(prevLimit => prevLimit + 4); 
    };
  return (
    <div className='news'>
      <h1>News</h1>

      <div className='newsList'>
        {NewsList.slice(0, limit).map((news, idx) =>{
          return <NewsItem 
            id={idx} 
            name={news.name} 
            imgOverview={news.imgOverview}
            overview={news.overview}
            />
        })}
      </div>

      {NewsList.length > limit && (
        <Button 
          onClick={showMore}
          sx={{color:"white", border: "1px solid white", width: "200px"}}
        >Show More</Button>
      )}
    </div>
  )
}

export default News