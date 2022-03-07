import React from 'react';
import './GreetingCard.css';
import { EmojiObjects } from '@mui/icons-material';

function GreetingCard() {
    return (
      <div className='greeting card'>
        <div className='greeting-icon'>
          <EmojiObjects sx={{ fontSize: 90 }} className='logo' />
        </div>
        <div className='greeting-profile'>
          <h2>Greetings, Jane! 🤩</h2>
          <p>
            Welcome to Starclass LMS! Study anytime and anywhere with us and
            discover the unknown.
          </p>
        </div>
        <div className='greeting-image'>
          <img
            src='https://static.vecteezy.com/system/resources/previews/004/654/239/non_2x/laptop-with-astronaut-and-space-icons-free-vector.jpg'
            alt=''
          />
        </div>
      </div>
    );
}

export default GreetingCard;