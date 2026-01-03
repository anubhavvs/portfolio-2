import React from 'react';
import { Twitter, Linkedin, GitHub } from 'react-feather';

import styles from './Social.module.css';

const Social = ({ mouseEnter, mouseLeave }) => {
  return (
    <div className={styles.social_links}>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='https://github.com/anubhavvs'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub profile link'
      >
        <GitHub />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='https://www.linkedin.com/in/anubhavvs/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn Prfile link'
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default Social;
