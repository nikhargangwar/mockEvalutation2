/* eslint-disable  */
import React from 'react';
import Card from '../Card';
import './AllSongs.css'
function AllSongs({allSongsData}) {
 
  return (
    <div className="card-plus-title">
      <div className="card-space-title">
        <div className="title-text">
          all songs 
        </div>
        <div className="toggle-button">
          <img src="my-app/assets/icon-genre.svg" alt="" />
        </div>
      </div>
      <div className="card-space">
       
        {
            // console.log(allSongsData.data)
            allSongsData.data.map((songdata) => 
            <Card 
            key={songdata.id}
            songdata={songdata} 
            />)
        //   <Card />
        }
      </div>
    </div>
  );
}

export default AllSongs;
