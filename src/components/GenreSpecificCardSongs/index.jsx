/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './GenreSpecificCardSongs.css';
// import gridIcon from '../../assets/icon-grid.svg';

function GenreSpecificCardSongs({ genre, allSongsData, genreImg }) {
  // console.log(allSongsData);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const genreFiltered = allSongsData.data.filter((song) => song.genre.name === genre);
    setCategory(genreFiltered);
  }, []);

  return category ? (

    <div className="genre-specific-space">
      <div className="genre-title">
        <div className="genre-image">
          <img src={genreImg} alt="genreimg" />
        </div>
        <div className="genre-title-text">
          <h2>{genre}</h2>

        </div>

      </div>
      <div className="genre-cards">
        {
            category.map((songdata, id) => (

              <Card
                id={id}
                key={songdata.id}
                songdata={songdata}
              />
            ))
        //   <Card />

        }

      </div>
    </div>
  ) : (
    <div className="blogDataLoader">
      <p>Loading...</p>
    </div>
  );
}

export default GenreSpecificCardSongs;
