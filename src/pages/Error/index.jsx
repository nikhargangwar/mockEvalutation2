import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar'; // Import
// import './error.css';

function Error() {
  const { errorCode } = useParams();
  return (
    <div>
      <Navbar />
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
    </div>
  );
}

export default Error;
