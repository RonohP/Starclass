import React from 'react';
import './ProgressBar.css';

function ProgressBar() {
  return (
    <div className='progress card'>
      <h2>Learning Progress</h2>
      <div className='progress-bar'>
        <h3>Completed Homeworks</h3>
        <p className='percentage'>25%</p>
        <div className='bar'>
          <div className='progress-value hw'></div>
        </div>
      </div>
      <div className='progress-bar'>
        <h3>Lessons Viewed</h3>
        <p className='percentage'>60%</p>
        <div className='bar'>
          <div className='progress-value vw'></div>
        </div>
      </div>
      <div className='progress-bar'>
        <h3>Courses finished</h3>
        <p className='percentage'>94%</p>
        <div className='bar'>
          <div className='progress-value fn'></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
