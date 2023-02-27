/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import Card from '../Card';
import './GenreSongs.css';
import PropTypes from 'prop-types';
import gridIcon from '../../assets/icon-grid.svg';
import GenreSpecificCardSongs from '../GenreSpecificCardSongs';
import GenreBollywood from '../../assets/genre-bollywood.png';
import GenreCountry from '../../assets/genre-country.png';
import GenrePop from '../../assets/genre-pop.png';
import GenreRock from '../../assets/genre-rock.png';

function GenreSongs({ allSongsData, setToggleClicked }) {
  // console.log(allSongsData);
  const toggleHandler = () => {
    setToggleClicked(false);
  };
  const genreList = ['Pop', 'Country', 'Bollywood', 'Rock'];
  const genreImages = {
    Bollywood: GenreBollywood,
    Country: GenreCountry,
    Pop: GenrePop,
    Rock: GenreRock,
  };

  return (
    <div className="card-plus-title">
      <div className="card-space-title">
        <div className="title-text">
          genres
        </div>
        <div className="toggle-button">
          <button type="button" onClick={toggleHandler}><img src={gridIcon} alt="toggle" /></button>

        </div>
      </div>
      <div className="card-space">
        {genreList.map((genre, id) => (
          <GenreSpecificCardSongs
            key={id}
            genre={genre}
            allSongsData={allSongsData}
            genreImg={genreImages[genre]}
          />
        ))}

      </div>

    </div>
  );
}

GenreSongs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allSongsData: PropTypes.object,
  setToggleClicked: PropTypes.func,
};

export default GenreSongs;
