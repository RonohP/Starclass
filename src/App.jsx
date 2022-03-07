import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

import AppState from './components/appstate';

function App() {
  return (
    <div className='App'>
      <AppState>
        <Routes>
          <Route exact path={'/'} element={<Register />} />
          <Route exact path={'/login'} element={<Login />} />
          <Route exact path={'/register'} element={<Register />} />
          <Route exact path={'*'} element={<MainPage />} />
          {/* <Route exact path={'*'} element={<PageNotFound/>} /> */}
        </Routes>
      </AppState>
    </div>
  );
}

export default App;