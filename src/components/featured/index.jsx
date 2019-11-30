import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './timeUntil';
import Fade from "react-reveal/Fade";
const Featured = () => {
  return (
    <div style={{position: `relative`}}>
      <Carousel/>
      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>
      <Fade left delay={1000}>
        <TimeUntil/>
      </Fade>
    </div>
  );
};

export default Featured;