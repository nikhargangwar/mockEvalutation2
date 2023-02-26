/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card';
import './GenreSongs.css';

function GenreSongs({ allSongsData }) {
  // console.log(allSongsData);
  return (
    <div className="card-plus-title">
      <div className="card-space-title">
        <div className="title-text">
          genres
        </div>
        <div className="toggle-button">
          <img src="my-app/assets/icon-genre.svg" alt="" />
        </div>
      </div>
      <div className="card-space">
        {

            allSongsData.data.map((songdata) => (

              <Card
                key={songdata.id}
                songdata={songdata}
              />
            ))
        //   <Card />
        }
      </div>

    </div>
  );
}

export default GenreSongs;
