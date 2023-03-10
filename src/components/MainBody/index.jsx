/* eslint-disable no-unused-vars */
import './MainBody.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest/index';
import AllSongs from '../AllSongs';

import { GET_SONGS_DATA } from '../../constants/apiEndPoints';
import GenreSongs from '../GenreSongs';

function MainBody() {
  const [error, setError] = useState();
  const [allSongsData, setAllSongsData] = useState();
  const [toggleClicked, setToggleClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(
      GET_SONGS_DATA(),
      { headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' } },
      navigate,
    )
      .then((response) => {
        // console.log(response);

        setAllSongsData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return (
      <div className="blogDataError" data-testid="error">
        <p>{error}</p>

      </div>
    );
  }

  return allSongsData ? (
    <div className="main-body">
      <div className="grey-area">
        {!toggleClicked
          ? (<AllSongs allSongsData={allSongsData} setToggleClicked={setToggleClicked} />)
          : (<GenreSongs allSongsData={allSongsData} setToggleClicked={setToggleClicked} />)}

      </div>
    </div>
  ) : (
    <div className="blogDataLoader">
      <p>Loading...</p>
    </div>
  );

  // if (!toggleClicked) {
  //   return (
  //     <div className="main-body">
  //       <div className="grey-area" />
  //     </div>
  //   );
  // }else{
  //    return (
  //     <div className="main-body">
  //       <div className="grey-area" />
  //     </div>
  // }
}

export default MainBody;
