import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';

import styles from './Intro.module.css';
import { ReactComponent as Chevron } from '../assets/chevron_right.svg';
import Social from './Social';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  useEffect(() => {
    document.title = 'Anubhav Saha';
  }, []);

  return (
    <animated.section style={style} className={styles.intro}>
      <div className={styles.image}>
        <figure>
          <img
            src='./picture/me.jpg'
            alt='Anubhav Saha'
          />
        </figure>
      </div>
      <div className={styles.about}>
        <p className={styles.skills}>
          react, node, express, mongodb, firebase, python, flutter
        </p>
        <p className={styles.specialization}>Mobile and Web</p>
        <h2 className={styles.title}>Frontend Developer</h2>
        <p className={styles.desc}>
          Hello! I'm Anubhav Saha, a Frontend Developer for Web and
          Mobile. I love creating beautiful and intuitive
          interfaces for users. I am pursuing Bachelor's of Computer Application
          from Institute of Engineering & Management, Kolkata.
          Apart from Web Technologies I have explored Machine Learning and Data Science.
          Other than these I love to play video games.
        </p>
        <Social mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        <Link
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={styles.next}
          to='/projects'
        >
          View Projects <Chevron />
        </Link>
      </div>
    </animated.section>
  );
};

export default Intro;
