/* eslint-disable  */
import React from 'react';
import Card from '../Card';
import './AllSongs.css'
import genreIcon from '../../assets/icon-genre.svg';
import PropTypes from 'prop-types'

function AllSongs({allSongsData,setToggleClicked}) {
 const toggleHandler=()=>{
  setToggleClicked(true)
 }
  return (
    <div className="card-plus-title">
      <div className="card-space-title">
        <div className="title-text">
          all songs 
        </div>
        <div className="toggle-button">
          <button onClick={toggleHandler}><img src={genreIcon} alt="toggle" /></button>
        </div>
      </div>
      <div className="card-space">
       
        {
             
            allSongsData.data.map((songdata,id) => 
            <Card 
            id = {id}
            key={songdata.id}
            songdata={songdata} 
            />)
        //   <Card />
        }
      </div>
    </div>
  );
}


AllSongs.propTypes={
  allSongsData:PropTypes.object,
  setToggleClicked:PropTypes.func
}
export default AllSongs;
