import React from 'react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import { BookOutlined, EmojiObjects, HomeOutlined, Logout, PeopleAltOutlined, PodcastsOutlined, Quiz, RssFeedOutlined } from '@mui/icons-material';

function Sidebar() {
    return (
      <div className='sidebar'>
        <Link to='/dashboard' className='icon link'>
          <EmojiObjects className='logo' fontSize='large' />
        </Link>

        <NavLink
          exact
          to={'/dashboard'}
          className='icon nav-link'
          activeClassName='side-active'
        >
          <HomeOutlined className='dash ' fontSize='medium' />
        </NavLink>

        <NavLink
          exact
          to={'/course'}
          className='icon nav-link'
          activeClassName='side-active'
        >
          <BookOutlined className='course ' fontSize='medium' />
        </NavLink>

        <NavLink
          exact
          to={'/podcast'}
          className='icon nav-link'
          activeClassName='side-active'
        >
          <PodcastsOutlined className='podcast ' fontSize='medium' />
        </NavLink>

        <NavLink
          exact
          to={'/blog'}
          className='icon nav-link'
          activeClassName='side-active'
        >
          <RssFeedOutlined className='blog ' fontSize='medium' />
        </NavLink>

        <NavLink
          exact
          to={'/communities'}
          className='icon nav-link'
          activeClassName='side-active'
        >
          <PeopleAltOutlined className='communities' fontSize='medium' />
        </NavLink>

        <NavLink
          exact
          to={'/faq'}
          className='icon nav-link'
          activeClassName='side-active'
        >
          <Quiz className='faq ' fontSize='medium' />
        </NavLink>

        <Link to={'/login'} className='icon link'>
          <Logout className='logout' fontSize='medium' />
        </Link>
      </div>
    );
}

export default Sidebar;