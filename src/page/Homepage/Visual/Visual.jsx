import React from 'react';
import { useOnTheAirQuery } from '../../../hooks/useOnTheAir';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VisualCard from './VisualCard';
import './Visual.style.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Visual = () => {
  const { data, isLoading, isError, error } = useOnTheAirQuery();
  const topFiveResults = data?.results.slice(0, 5);
  // console.log(topFiveResults);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='visual-wrap'>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {topFiveResults?.map((movie, index) => (
          <VisualCard key={index} movie={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default Visual;
