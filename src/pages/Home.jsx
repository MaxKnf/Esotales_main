import React from 'react';
import './Home.css';
import NewsItem from '../components/news/NewsItem';
import { NewsList } from '../components/news/NewsList';
import { ClassesList } from '../components/classes/ClassesList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import ytIcon from "../icons/youtube.png"
import twiIcon from "../icons/twitch.png"


function Home() {
  const classList = ClassesList
  const newsList = NewsList
  const navigate = useNavigate();


  return (
    <div className='home'>
      <div className='esotales-intro'>
        <h1>Welcome to Esotales, your Elder Scrolls Online destination !</h1>
        <p>Explore guides, builds, news, and our gallery. Let's conquer Tamriel together !</p>
      </div>

      <div className='newsList news-home'>
        <h2>Our Latest News</h2>
        <div className='news-home-container'>
        {newsList.slice(0, 3).map((news, idx) => {
          return (
            <NewsItem className="news-home-item"
              id={idx} 
              name={news.name} 
              imgOverview={news.imgOverview}
            />
          );
        })} 
        </div>
      </div>

      <div className='most-viewed-class'>
        <h2>Most Viewed Classes</h2>
        <div className='most-viewed-class-list'>
          <Card className='classe-card-item' onClick={() => navigate("/classes/0")+ window.scrollTo(0, 0)} >
          <CardMedia
            sx={{ height: 250 }}
            image={classList[0].image}
            title={classList[0].name}
          />
          <CardContent className='classe-card-content'>
            <Typography gutterBottom variant="h4" component="div">
            {classList[0].name}
            </Typography>
          </CardContent>
          </Card>

          <Card className='classe-card-item'  onClick={() => navigate("/classes/1")+ window.scrollTo(0, 0)} >
            <CardMedia
              sx={{ height: 250 }}
              image={classList[1].image}
              title={classList[1].name}
            />
            <CardContent className='classe-card-content'>
              <Typography gutterBottom variant="h4" component="div">
              {classList[1].name}
              </Typography>
            </CardContent>
          </Card>

          <Card className='classe-card-item'  onClick={() => navigate("/classes/4")+ window.scrollTo(0, 0)}>
            <CardMedia
              sx={{ height: 250 }}
              image={classList[4].image}
              title={classList[4].name}
            />
            <CardContent className='classe-card-content'>
              <Typography gutterBottom variant="h4" component="div">
              {classList[4].name}
              </Typography>
            </CardContent>
          </Card>
        </div>
        
      </div>

      <div className='content-creators'>
        <h2>Content Creators</h2>
        <div className='content-creators-container'>
          <div className='content-creators-item'>
            <h3>CPCharles</h3>
            <div className='content-creators-link'>
              <a href="https://www.youtube.com/@CharlesESO"target="_blank" rel="noreferrer"><img className='ytb-icon' src={ytIcon} alt="youtube" /></a>
              <a href="https://www.twitch.tv/cpcharles/"target="_blank" rel="noreferrer"><img className='twi-icon' src={twiIcon} alt="twitch" /></a>    
            </div>
          </div>

          <div className='content-creators-item'>
          <h3>Skinny Cheeks</h3>
            <div className='content-creators-link'>
              <a href="https://www.youtube.com/skinnycheeksgaming" target="_blank" rel="noreferrer"><img className='ytb-icon' src={ytIcon} alt="youtube" /></a>
              <a href="https://www.twitch.tv/skinnycheeks" target="_blank" rel="noreferrer"><img className='twi-icon' src={twiIcon} alt="twitch" /></a>    
            </div>
          </div>

          <div className='content-creators-item'>
          <h3>Eigh1 Puppies</h3>
            <div className='content-creators-link'>
              <a href="https://www.youtube.com/@eigh1puppies" target="_blank" rel="noreferrer"><img className='ytb-icon' src={ytIcon} alt="youtube" /></a>
              <a href="https://www.twitch.tv/eigh1_puppies" target="_blank" rel="noreferrer"><img className='twi-icon' src={twiIcon} alt="twitch" /></a>    
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Home;
