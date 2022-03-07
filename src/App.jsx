import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path={'*'} element={<MainPage />} />
        {/* <Route exact path={'*'} element={<PageNotFound/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
