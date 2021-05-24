import React from 'react';

import styles from './Navbar.module.css';
import { useSpring, animated, config } from 'react-spring';

const Menubar = ({ open, toggleMenubar, mouseEnter, mouseLeave }) => {
  const sidebar = useSpring({
    transform: open ? `translateX(0)` : `translateX(120%)`,
    maxWidth: open ? '500px' : '0px',
    config: { ...config.gentle, duration: 750 },
  });

  return (
    <animated.div style={sidebar} className={styles.menubar}>
      <button
        onClick={toggleMenubar}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.menubar_close}
      >
        Close
      </button>
      <ul>
        <li>
          <a
            className={styles.menubar_link}
            href='/'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={styles.menubar_link}
            href='/projects'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Work & Projects
          </a>
        </li>
        <li>
          <a
            className={styles.menubar_link}
            href='/blog'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className={styles.menubar_link}
            href='/contact'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className={styles.menubar_link}
            href='https://docs.google.com/document/d/1DPvYG1WLFJJ6vjNcX-7CVq1G85CfYOEoCBNVjOlFC0U/edit?usp=sharing'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            target='_blank'
            rel='noopener noreferrer'
          >
            Résumé
          </a>
        </li>
      </ul>
    </animated.div>
  );
};

export default Menubar;
