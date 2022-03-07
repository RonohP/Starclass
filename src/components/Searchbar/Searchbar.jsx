import { NotificationsNone, Search } from '@mui/icons-material';
import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <div className='search-bar'>
      <div className='main-logo'>
        <h1>Starclass LMS</h1>
      </div>
      <form className='search'>
        <Search fontSize='small'className='search-icon'/>
        <input type='text' name='search' id='search' placeholder='Search...' />
      </form>
      <div className='notification'>
        <button className=''>
          <NotificationsNone fontSize='medium' />
          <span className='notification-label'>3</span>
        </button>
      </div>
      <div className='profile'>
        <button className='profile-btn'>
          <span className='profile-active'></span>
        </button>
        <p className='profile-name'>Jane Doe</p>
      </div>
    </div>
  );
}

export default Searchbar;
