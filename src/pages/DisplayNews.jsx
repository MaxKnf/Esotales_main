import React from 'react'
import "./DisplayNews.css"
import { useParams } from 'react-router-dom'
import { NewsList } from '../components/news/NewsList';


function DisplayNews() {
  const {id} = useParams();
  const news = NewsList[id]

  return (
    <div className='news'
      >
      <h1>{news.name}</h1>
      <p className='part1'>{news.part1}</p>
      <p className='part2'>{news.part2}</p>
      <p className='part3'>{news.part3}</p>
      <p className='part4'>{news.part4}</p>
      <p className='part5'>{news.part5}</p>
      <p className='part6'>{news.part6}</p>
      <p className='part7'>{news.part7}</p>
      <p className='part8'>{news.part8}</p>
      <p className='part9'>{news.part9}</p>
      <p className='part10'>{news.part10}</p>
      <p className='part11'>{news.part11}</p>
      <p className='part12'>{news.part12}</p>
      <p className='part13'>{news.part13}</p>
      <p className='part14'>{news.part14}</p>
      <p className='part15'>{news.part15}</p>    
    </div>

  )
}

export default DisplayNews