import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomeStyle.css';

export default function Home() {
  return (
    <div className='home-container'>
      <NavBar/>
      <h1>Home</h1>
    </div>
  )
}
