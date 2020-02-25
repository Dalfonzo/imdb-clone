import React, { Component } from 'react';
import axios from 'axios';
import classes from './Search-box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons';
import SearchMenu from './search-menu/Search-menu';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      focus: false,
      displayOptions: false
    };
  }

  ApiUrl = 'http://www.omdbapi.com/?&apikey=2fb22d1&s=';

  getApi = e => {
    try {
      axios.get(this.ApiUrl + e.target.value).then(({ data }) => {
        this.props.getData(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  focusHandler = () => {
    this.setState({
      focus: !this.state.focus
    });
  };

  clickHandler = () => {
    this.setState({
      displayOptions: !this.state.displayOptions
    });
  };

  render() {
    const { focus, displayOptions } = this.state;
    return (
      <div className={`${classes.container} ${focus ? classes.focus : ''}`}>
        <div className={classes.list_options} onClick={this.clickHandler}>
          All <FontAwesomeIcon icon={faSortDown} className={classes.icon} />
        </div>
        {displayOptions ? <SearchMenu /> : null}

        <input
          type="text"
          placeholder="Search IMDB"
          onChange={this.getApi}
          onFocus={this.focusHandler}
          onBlur={this.focusHandler}
        />

        <FontAwesomeIcon icon={faSearch} className={classes.magnifier} />
      </div>
    );
  }
}

export default SearchBox;
