import React from 'react'
import { useState } from 'react';
import NewsItem from '../components/news/NewsItem'
import { NewsList } from '../components/news/NewsList'

function News() {
    const initialLimit = 4;
    const [limit, setLimit] = useState(initialLimit);
    const showMore = () => {
      setLimit(prevLimit => prevLimit + 4); 
    };
  return (
    <div>
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
        <button onClick={showMore}>Show More</button>
      )}
    </div>
  )
}

export default News