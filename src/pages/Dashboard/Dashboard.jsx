import React from 'react';
import AreaChart from '../../components/AreaChart';
import GreetingCard from '../../components/GreetingCard/GreetingCard';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './Dashboard.css';

function Dashboard() {
    return (
      <div className='dashboard-content'>
        <div className='greeting-content'>
          <GreetingCard />
          <ProgressBar />
        </div>
        <div className='learning-content'>
          <div className='card learning'>
            <div className='learning-graph'>
              <h2>Learning efficiency</h2>
              <AreaChart style={{textAlign: 'center'}}/>
            </div>
            <div className='learning-not-viewed'>
              <h2>Not Viewed</h2>
              <div className='card-lessons'>
                <h3>HTML: The Basics</h3>
                <p className='lesson-caption'>
                  Lesson N*11, CSS, Selections and functions
                </p>
                <p className='time-caption'>2:44 / 13:07</p>
              </div>
              <div className='card-lessons'>
                <h3>Photoshop Retouch</h3>
                <p className='lesson-caption'>
                  Lesson N*4, Frequency decomposition technique
                </p>
                <p className='time-caption'> 7:58 / 14:35</p>
              </div>
              <div className='card-lessons'>
                <h3>Object Photography</h3>
                <p className='lesson-caption'>
                  Lesson N*5, Shooting liquid in motion
                </p>
                <p className='time-caption'>5:10 / 12:29</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lesson-dash-content'></div>
      </div>
    );
}

export default Dashboard;