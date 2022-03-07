import React from 'react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import {
  BookOutlined,
  EmojiObjects,
  HomeOutlined,
  Logout,
  PeopleAltOutlined,
  PodcastsOutlined,
  Quiz,
  RssFeedOutlined,
} from '@mui/icons-material';

function Sidebar() {
  let activeClassName = 'icon side-active';
  return (
    <div className='sidebar'>
      <Link to='/dashboard' className='icon link'>
        <EmojiObjects className='logo' fontSize='large' />
      </Link>

      <NavLink
        to={'/dashboard'}
        className={({ isActive }) =>
          isActive ? activeClassName : 'icon nav-link'
        }
      >
        <HomeOutlined className='dash ' fontSize='medium' />
      </NavLink>

      <NavLink
        to={'/course'}
        className={({ isActive }) =>
          isActive ? activeClassName : 'icon nav-link'
        }
      >
        <BookOutlined className='course ' fontSize='medium' />
      </NavLink>

      <NavLink
        to={'/podcast'}
        className={({ isActive }) =>
          isActive ? activeClassName : 'icon nav-link'
        }
      >
        <PodcastsOutlined className='podcast ' fontSize='medium' />
      </NavLink>

      <NavLink
        to={'/blog'}
        className={({ isActive }) =>
          isActive ? activeClassName : 'icon nav-link'
        }
      >
        <RssFeedOutlined className='blog ' fontSize='medium' />
      </NavLink>

      <NavLink
        to={'/communities'}
        className={({ isActive }) =>
          isActive ? activeClassName : 'icon nav-link'
        }
      >
        <PeopleAltOutlined className='communities' fontSize='medium' />
      </NavLink>

      <NavLink
        to={'/faq'}
        className={({ isActive }) =>
          isActive ? activeClassName : 'icon nav-link'
        }
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
