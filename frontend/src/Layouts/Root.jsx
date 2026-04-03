import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import MusicPlayer from '../components/MusicPlayer';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-0">
        <Outlet />
      </div>

      <div className='fixed bottom-5 right-5'>
       <MusicPlayer/>
      </div>
    </div>
  );
}

export default Root