import React from 'react';
import Navbar from '../../components/Navbar';
import SyncButton from '../../components/SyncButton';

function Home() {
  return (
    <div className="app">
      <Navbar />
      <SyncButton />
    </div>
  );
}

export default Home;
