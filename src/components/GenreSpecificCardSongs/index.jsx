/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './GenreSpecificCardSongs.css';
// import gridIcon from '../../assets/icon-grid.svg';

function GenreSpecificCardSongs({ genre, allSongsData }) {
  // console.log(allSongsData);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const genreFiltered = allSongsData.data.filter((song) => song.genre.name === genre);
    setCategory(genreFiltered);
  }, []);

  return category ? (

    <div>
      <div className="genre-title">
        {genre}
      </div>
      <div className="genre-cards">
        {
            category.map((songdata) => (

              <Card
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
