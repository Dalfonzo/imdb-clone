import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import SearchBox from './search-box/Search-box';
import Menu from './menu/Menu';
import PopUp from './pop-up/pop-up';
import logo from '../../assets/images/IMDB.png';
import { faBars, faBookmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Header.module.scss';

class Header extends React.Component {
  state = {
    data: [],
    displayMenu: false,
    popUp: false,
  };

  getData = (data) => {
    this.setState({
      data,
    });
  };

  toggleMenu = () => {
    this.setState({
      displayMenu: !this.state.displayMenu,
    });
  };

  handlePopUp = () => {
    this.setState({
      popUp: !this.state.popUp,
    });
  };

  showScrolls = (visible) => {
    let element = document.querySelector('body');

    visible
      ? (element.style.overflow = 'hidden')
      : (element.style.overflow = 'auto');
  };

  render() {
    let { displayMenu, popUp } = this.state;
    this.showScrolls(displayMenu);
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Link to="/" className={classes.option}>
            <img src={logo} alt="" />
          </Link>
          <Link to="#" className={classes.option} onClick={this.toggleMenu}>
            <Icon icon={faBars} className={classes.menu_icon} />
            <span>Menu</span>
          </Link>
          <SearchBox getData={this.getData} />
          <Link
            to="/imdbpro"
            className={classes.option}
            onMouseEnter={this.handlePopUp}
            onMouseLeave={this.handlePopUp}
          >
            IMDbPro
            {popUp ? <PopUp /> : null}
          </Link>
          <Link to="/" className={classes.option}>
            <Icon icon={faBookmark} className={classes.menu_icon} />
            Watchlist
          </Link>
          <Link to="/signin" className={classes.option}>
            Sign In
          </Link>
        </div>
        <Menu show={displayMenu} toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}
export default Header;
