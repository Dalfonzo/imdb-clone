import React from 'react';
import CastElement from './cast-element/CastElement';

import classes from './Cast.module.scss';

const cast = ({ cast }) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <p>Cast</p>
        <p>Edit</p>
      </div>
      <p>Cast overview, first billed only:</p>
      <ul className={classes.list}>
        {cast.map(({ id, ...otras }) => (
          <li>
            <CastElement key={id} {...otras} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default cast;
