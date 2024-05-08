import React from 'react'
// import { useState } from 'react';
import NewsItem from '../components/news/NewsItem'
import { NewsList } from '../components/news/NewsList'
import './Home.css'

function Home() {
  return (
    <div>
      <div className='esotales-intro' >
        Welcome to Esotales, your Elder Srolls Online destination! Explore guides, builds, news, and our gallery. Let's conquer Tamriel together!
      </div>

      <div className='home-news-list'>
        {NewsList.slice(0, 5).map((news, idx) =>{
          return <NewsItem 
            id={idx} 
            name={news.name} 
            imgOverview={news.imgOverview}
            overview={news.overview}
            />
        })}
      </div>
      
      <div className='content-creators'>
        <iframe 
          src="https://player.twitch.tv/?channel=cpcharles&parent=localhost" frameborder="0" 
          allowfullscreen="true" 
          scrolling="no" 
          height="378" width="620">title</iframe>
      </div>

    </div>
  )
}

export default Home