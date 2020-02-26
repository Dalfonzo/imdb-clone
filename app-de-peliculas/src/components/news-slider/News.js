import React from 'react';
import axios from 'axios';
import Card from './news-card/newsCard';

class News extends React.Component {
  state = {
    data: [],
    position: 0
  };

  getNews = () => {
    axios(this.props.url).then(({ data }) => {
      console.log(data.articles);
      this.setState({
        data: data.articles
      });
    });
  };
  componentDidMount() {
    this.getNews();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(n => (
          <Card image={n.urlToImage} />
        ))}
      </div>
    );
  }
}
export default News;
