/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

function Card({ songdata }) {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <div className="card-image">
          <img src={songdata.imageUrl} alt="title" />
        </div>
      </div>

      <div className="card-details">
        <div className="card-text">
          <div className="card-heading">
            {songdata.name}
          </div>
          <div className="card-subheading">
            {songdata.artist.name}
          </div>
        </div>
        <div className="liked-icon">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
