import './SyncButton.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SONGS } from '../../constants/routesPaths';

function SyncButton() {
  const navigate = useNavigate();
  const syncButtonHandler = () => {
    navigate(SONGS);
  };

  return (
    <div className="Mainbody">
      <div className="sync-button-wrapper">
        <div className="sync-text">
          :((

          <br />
          seems a bit empty in here...
        </div>
        <div>

          <button className="sync-button" type="button" onClick={syncButtonHandler}><h2>sync</h2></button>
        </div>
      </div>
    </div>
  );
}

export default SyncButton;
