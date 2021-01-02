import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Slider from '../../components/movies-slider/Slider';
import News from '../../components/news-slider/News';
import Celebrities from '../../components/celebrities-slider/Celebrities';
import {
  UPCOMING_MOVIES,
  POPULAR_MOVIES,
  PLAYING_MOVIES,
  CELEBRITIES,
  HEADLINES,
} from '../../constants/apis';

import classes from './Home.module.scss';

const HOME_TITLE =
  'IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows';

const Home = () => {
  React.useEffect(() => {
    document.title = HOME_TITLE;
  }, []);

  return (
    <div className={classes.container}>
      <Carousel url={UPCOMING_MOVIES} />
      <Slider
        title="What to Watch"
        subtitle="Fan Favorites"
        description="This week's top TV and movies"
        url={POPULAR_MOVIES + '1'}
      />
      {/* <News title="More to explore" subtitle="Top news" url={HEADLINES} /> */}
      <Slider
        title="Explore what’s streaming"
        subtitle="Prime Video"
        description="Included with Prime"
        url={POPULAR_MOVIES + '2'}
      />
      <Slider
        title="Explore movies & TV shows"
        subtitle="In theathers"
        description="Showtimes near you"
        url={PLAYING_MOVIES}
      />
      <Celebrities
        subtitle="Fans Pick"
        description="Celebs of the week"
        url={CELEBRITIES}
      />
    </div>
  );
};

export default Home;
