/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Card.css';
import GET_LIKES_DATA from '../../constants/likesEndPoint.json';
import makeRequest from '../../utils/makeRequest';
import greyHeartIcon from '../../assets/heart-gray.svg';
import redHeartIcon from '../../assets/heart-red.svg';
import { GET_SONG_DATA, LIKE_SONG } from '../../constants/apiEndPoints';

function Card({ songdata }) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const clickHandler = () => {
    if (isLiked) {
      makeRequest(
        LIKE_SONG(songdata.id),
        {
          headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
          data: { like: false },
        },
      );
      setIsLiked(!isLiked);
      setLikeCount(likeCount - 1);
    } else {
      makeRequest(
        LIKE_SONG(songdata.id),
        {
          headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
          data: { like: true },
        },
      );
      setIsLiked(!isLiked);
      setLikeCount(likeCount + 1);
    }
  };

  useEffect(() => {
    makeRequest(GET_SONG_DATA(songdata.id), {
      headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
    })
      .then((response) => {
        setLikeCount(response.data.count);
        setIsLiked(response.data.like);
      });
  }, []);
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
          <h3>
            <button type="button" onClick={clickHandler}>
              {likeCount}
            </button>
          </h3>
          {isLiked ? (<img src={redHeartIcon} alt="hearticon" />)
            : (<img src={greyHeartIcon} alt="hearticon" />)}

        </div>
      </div>
    </div>
  );
}

export default Card;
