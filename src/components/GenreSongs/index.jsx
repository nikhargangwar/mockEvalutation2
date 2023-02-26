/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import Card from '../Card';
import './GenreSongs.css';
import genreIcon from '../../assets/icon-genre.svg';
import GenreSpecificCardSongs from '../GenreSpecificCardSongs';

function GenreSongs({ allSongsData, setToggleClicked }) {
  // console.log(allSongsData);
  const toggleHandler = () => {
    setToggleClicked(false);
  };
  const genreList = ['Pop', 'Country', 'Bollywood', 'Rock'];
  return (
    <div className="card-plus-title">
      <div className="card-space-title">
        <div className="title-text">
          genres
        </div>
        <div className="toggle-button">
          <button type="button" onClick={toggleHandler}><img src={genreIcon} alt="toggle" /></button>

        </div>
      </div>
      <div className="card-space">
        {genreList.map((genre, id) => (
          <GenreSpecificCardSongs
            key={id}
            genre={genre}
            allSongsData={allSongsData}
          />
        ))}

      </div>

    </div>
  );
}

export default GenreSongs;
