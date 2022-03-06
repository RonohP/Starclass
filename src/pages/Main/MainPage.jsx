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

function MainPage() {
  return (
    <div className='main'>
      <Sidebar />
      <div className='content'>
        <Searchbar />

        <Routes>
          <Route path={'/dashboard'}>
            <Dashboard />
          </Route>
          <Route exact path={'/course'}>
            <Course />{' '}
          </Route>
          <Route exact path={'/podcast'}>
            <Podcast />{' '}
          </Route>
          <Route exact path={'/blog'}>
            <Blog />{' '}
          </Route>
          <Route exact path={'/communities'}>
            <Communities />{' '}
          </Route>
          <Route exact path={'/faq'}>
            <FAQ />{' '}
          </Route>
          <Route component={Dashboard} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
