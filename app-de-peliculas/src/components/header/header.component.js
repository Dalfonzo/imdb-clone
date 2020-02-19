import React from 'react';
import './header.styles.scss';
import SearchBox from '../search-box/Search-box.component';
import { Link } from 'react-router-dom';
import logo from '../../images/IMDB.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark } from '@fortawesome/free-solid-svg-icons';

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
        <Link to="/" className="option">
          <img src={logo} alt="" />
        </Link>
        <Link to="/" className="option">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          Menu
        </Link>
        <SearchBox getData={this.getData} />
        <Link to="/" className="option">
          IMDbPro
        </Link>
        <Link to="/" className="option">
          <FontAwesomeIcon icon={faBookmark} className="menu-icon bookmark" />
          Watchlist
        </Link>
        <Link to="/" className="option">
          Sign In
        </Link>
      </div>
    );
  }
}
export default Header;
