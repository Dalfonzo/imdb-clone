import React from 'react';
import './header.styles.scss';
import SearchBox from '../search-box/Search-box.component';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getData = data => {
    this.setState({
      data
    });
  };

  render() {
    return (
      <div className="header-contenedor">
        <Link to="/">Logo</Link>
        <Link to="/">Menu</Link>
        <SearchBox getData={this.getData} />
        <Link to="/">IMDbPro</Link>
        <Link to="/">Watchlist</Link>
        <Link to="/">Sign In</Link>
      </div>
    );
  }
}
export default Header;
