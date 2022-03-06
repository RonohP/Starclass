import { NotificationsNone } from '@mui/icons-material';
import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <div className='search-bar'>
      <div className='main-logo'>
          <p>Starclass LMS</p></div>
      <form className='search'>
          <input type="text" name='search' id='search' placeholder='Search...' /></form>
      <div className='notification'>
        <button className=''>
          <NotificationsNone fontSize='medium'/>
          <span className='notification-label'></span>
        </button>
      </div>
      <div className='profile'></div>
    </div>
  );
}

export default Searchbar;
