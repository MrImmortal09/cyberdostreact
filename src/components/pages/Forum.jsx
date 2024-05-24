import React from 'react';
import '../../Forum.css';
// import Header from '../Header';
import Trending from '../Trending';
import Posts from '../Posts'; 
import Sidebar from '../Sidebar';

function Forum() {
  return (
    <div className=''>
      {/* <Header /> */}
      <div id="main">
        <Trending />
        <div id="content">
          <Posts initialUpvotes={10} />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Forum;
