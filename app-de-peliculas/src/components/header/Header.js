import React from 'react';
import classes from './Header.module.scss';
import SearchBox from './search-box/Search-box';
import { Link } from 'react-router-dom';
import logo from '../../images/IMDB.png';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu/Menu';
import PopUp from './pop-up/pop-up';

class Header extends React.Component {
  state = {
    data: [],
    displayMenu: false,
    popUp: false
  };

  getData = data => {
    this.setState({
      data
    });
  };

  toggleMenu = () => {
    this.setState({
      displayMenu: !this.state.displayMenu
    });
  };

  handlePopUp = () => {
    this.setState({
      popUp: !this.state.popUp
    });
  };

  render() {
    let { displayMenu, popUp } = this.state;
    return (
      <>
        <div className={classes.container}>
          <Link to="/" className={classes.option}>
            <img src={logo} alt="" />
          </Link>
          <Link to="/" className={classes.option} onClick={this.toggleMenu}>
            <Icon icon={faBars} className={classes.menu_icon} />
            Menu
          </Link>
          <SearchBox getData={this.getData} />
          <Link
            to="/"
            className={classes.option}
            onMouseEnter={this.handlePopUp}
            onMouseLeave={this.handlePopUp}
          >
            IMDbPro
            {popUp ? <PopUp /> : null}
          </Link>
          <Link to="/" className={classes.option}>
            <Icon icon={faBookmark} className="menu-icon bookmark" />
            Watchlist
          </Link>
          <Link to="/" className={classes.option}>
            Sign In
          </Link>
        </div>
        <Menu show={displayMenu} toggleMenu={this.toggleMenu} />
      </>
    );
  }
}
export default Header;
