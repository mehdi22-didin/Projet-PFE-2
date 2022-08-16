import React from 'react';  
import './Topbar.css';
import {Notifications, Settings} from '@mui/icons-material';
import homme from '../../photos/homme.jpg'

function Topbar() {
  return (
    <div className='topbar' >
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className="logo">GazIndic</span>  
            </div>
            <div className='topright'>
                <div className="topbariconcountainer">
                <Notifications />
                <span className="topiconbadge">2</span>
                </div>
                <div className="topbariconcountainer">
                <Settings />
                </div>
                <img src={homme} alt="" className="imagestyle" />
            </div>
        </div>
    </div>
   
  )
}

export default Topbar;