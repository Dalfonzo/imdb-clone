import React from 'react';
import classes from './Footer.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
  faAmazon
} from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.icons_wrapper}>
        <Icon icon={faFacebookSquare} className={classes.icon} />
        <Icon icon={faInstagram} className={classes.icon} />
        <Icon icon={faTwitch} className={classes.icon} />
        <Icon icon={faTwitter} className={classes.icon} />
        <Icon icon={faYoutube} className={classes.icon} />
      </div>
      <div className={classes.links_wrapper}>
        <p>
          Get the IMDb APP{' '}
          <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
        <p>
          Help <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
        <p>
          Site Index <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
        <p>
          IMDbPro <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
        <p>
          Box Office Mojo{' '}
          <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
        <p>Press Room</p>
        <p>
          Advertising <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
        <p>
          Jobs <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
        <p>Conditions of Use</p>
        <p>Privacy Policy</p>
        <p>
          Interest-Based Ads{' '}
          <Icon icon={faExternalLinkAlt} className={classes.icon} />
        </p>
      </div>
      <p className={classes.branding}>
        an <Icon icon={faAmazon} className={classes.icon} />
        company
      </p>
      <p className={classes.copyright}>© 1990-2020 by IMDb.com, Inc.</p>
    </div>
  );
};

export default footer;
