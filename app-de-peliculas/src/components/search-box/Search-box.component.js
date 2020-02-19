import React from 'react';
import axios from 'axios';
import './Search-box.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons';

const SearchBox = props => {
  const ApiUrl = 'http://www.omdbapi.com/?&apikey=2fb22d1&s=';

  const getApi = e => {
    try {
      axios.get(ApiUrl + e.target.value).then(({ data }) => {
        props.getData(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-contenedor">
      <div className="list-options">
        All <FontAwesomeIcon icon={faSortDown} className="icon" />
      </div>

      <input type="text" placeholder="Search IMDB" onChange={getApi} />
      <FontAwesomeIcon icon={faSearch} className="magnifier" />
    </div>
  );
};

export default SearchBox;
