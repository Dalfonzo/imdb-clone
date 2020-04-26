import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Slider from '../../components/movies-slider/Slider';
import News from '../../components/news-slider/News';
import Celebrities from '../../components/celebrities-slider/Celebrities';

import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.container}>
      <Carousel url="https://api.themoviedb.org/3/movie/upcoming?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1" />
      <Slider
        title="What to Watch"
        subtitle="Fan Favorites"
        description="This week's top TV and movies"
        url="https://api.themoviedb.org/3/movie/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1"
      />
      <News
        title="More to explore"
        subtitle="Top news"
        url="http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c89fb28b98ed4170a4004bab8835654b"
      />
      <Slider
        title="Explore what’s streaming"
        subtitle="Prime Video"
        description="Included with Prime"
        url="https://api.themoviedb.org/3/movie/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=2"
      />
      <Slider
        title="Explore movies & TV shows"
        subtitle="In theathers"
        description="Showtimes near you"
        url="https://api.themoviedb.org/3/movie/now_playing?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1"
      />
      <Celebrities
        subtitle="Favorites"
        description={`Celebs of the week`}
        url="https://api.themoviedb.org/3/person/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1"
      />
    </div>
  );
};

export default Home;
