import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';

import styles from './Contact.module.css';
import Social from './Social';
import { useEffect } from 'react';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  useEffect(() => {
    document.title = 'Contact Me';
  }, []);

  return (
    <animated.section style={style} className={styles.contact}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.breadcrumb}
      >
        <Link to='/'>
          <span className={styles.inactive}>Home</span>
        </Link>
        <span className={styles.active}> / Contact</span>
      </div>
      <section className={styles.main}>
        <div className={styles.image}>
          <figure>
            <img
              src='./picture/me.jpg'
              alt='anubhav saha'
            />
          </figure>
        </div>
        <div className={styles.contact_content}>
          <header>
            <h2 className={styles.heading}>Have a question?</h2>
          </header>
          <p className={styles.contact_bait}>
            I'm currently available for internships or part-time work, but will treat
            messages based on how interesting they sound. Send me a mail and
            I'll respond in 24 hours!
          </p>

          <div className={styles.contact_options}>
            <div className={styles.contact_option}>
              <p>Email</p>
              <a
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                href='mailto:anubhavvsaha2001@gmail.com'
              >
                click_here
              </a>
            </div>
          </div>
          <Social mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        </div>
      </section>
    </animated.section>
  );
};

export default Intro;
