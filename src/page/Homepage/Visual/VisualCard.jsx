import React from 'react';
import tonly from '../../../assets/svg/tonly.svg';
import './VisualCard.style.css';

const VisualCard = ({ movie }) => {
  // console.log('VisualCard', movie);
  return (
    <div
      className='visual-card-wrap'
      style={{
        background: `url(
          https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}
        )`,
      }}
    >
      <div className='visual-text-wrap'>
        <div className='tonly-wrap'>
          <img src={tonly} alt='tonly' width={100} height={100}></img>
        </div>
        <h1>{movie.name}</h1>
        <p>
          {movie.overview
            ? movie.overview.slice(0, 250) + '...'
            : `first_air_date: ${movie.first_air_date}`}
        </p>
      </div>
    </div>
  );
};
export default VisualCard;
