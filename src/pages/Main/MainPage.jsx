import React from 'react';
import './MainPage.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Searchbar from '../../components/Searchbar/Searchbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Course from '../Course/Course';
import Podcast from '../Podcast/Podcast';
import Blog from '../Blog/Blog';
import Communities from '../Communities/Communities';
import FAQ from '../FAQ/faq';
// import AppState from '../../components/appstate';

function MainPage() {
  return (
    <div className='main'>
      <Sidebar />
      <div className='content'>
        <Searchbar />

        <Routes>
          <Route exact path={'/course'} element={<Course />} />
          <Route exact path={'/dashboard'} element={<Dashboard />} />
          <Route exact path={'/podcast'} element={<Podcast />} />
          <Route exact path={'/blog'} element={<Blog />} />
          <Route exact path={'/communities'} element={<Communities />} />
          <Route exact path={'/faq'} element={<FAQ />} />
          <Route element={<Dashboard />} />
        
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
