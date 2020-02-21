import React from 'react';
import axios from 'axios';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getApi = () => {
    const titulo = 'anime';
    const url =
      'http://www.omdbapi.com/?i=tt3896198&apikey=2fb22d1&s=' +
      titulo +
      '&page=1';
    axios.get(url).then(({ data }) => {
      // console.log(data.Search);
      this.setState({
        data: data.Search
      });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <button onClick={this.getApi}>CLICK ME</button>
        {console.log(data)}
        {data.map(peli => (
          <div>
            <img src={peli.Poster} alt="" />
            <p>{peli.Title}</p>
          </div>
        ))}
      </>
    );
  }
}

export default Test;
