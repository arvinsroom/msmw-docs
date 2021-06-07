import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Simulate a social media experience',
    Svg: require('../../static/img/home-simulate-a-social-media-experience.svg').default,
    description: (
      <>
        Create an interactive social media timeline that closely mimics the real experience of using those social media platforms, including using participants' submitted usernames and profile photos.
      </>
    ),
  },
  {
    title: 'Easily set up and customize',
    Svg: require('../../static/img/home-easily-set-up-and-customize.svg').default,
    description: (
      <>
        After setting up, everything from creating studies to downloading the resulting data is handled using a researcher portal with a guided user interface. Changes in the portal are immediately reflected for participants.
      </>
    ),
  },
  {
    title: 'Modular and Extensible',
    Svg: require('../../static/img/home-modular-and-extensible.svg').default,
    description: (
      <>
        Researchers can easily create and rearrange various components of studies like building blocks, and developers can easily integrate new building blocks (e.g., new simulated social media platforms) in the future.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
