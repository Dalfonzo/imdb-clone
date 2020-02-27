import React, { Component } from 'react';

import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Slider from './components/movies-slider/Slider';
import News from './components/news-slider/News';
import Celebrities from './components/celebrities-slider/Celebrities';
import Footer from './components/footer/Footer';

import './App.css';

class App extends Component {
  state = {
    data: []
  };

  getToday() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(months[today.getMonth()]);
    today = `${month} ${day}`;

    return today;
  }

  render() {
    const today = this.getToday();
    return (
      <div className="contenedor">
        <Header />
        <Carousel />
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
          url="https://api.themoviedb.org/3/movie/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=3"
        />
        <Slider
          title="Explore movies & TV shows"
          subtitle="In theathers"
          description="Showtimes near you"
          url="https://api.themoviedb.org/3/movie/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=2"
        />
        <Celebrities
          subtitle="Born Today"
          description={`People born on ${today}`}
          url="https://api.themoviedb.org/3/person/popular?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa&language=en-US&page=1"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
