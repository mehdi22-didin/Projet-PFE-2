import React, {useState}from 'react';
import './sidebar.css';
import {SideBarData} from './SideBarData';
import {useNavigate} from 'react-router-dom';



function Sidebar() {
  let navigate = useNavigate();
  return (
    <div className='Sidebar'>
      <ul className='sidebarlist'>
        {SideBarData.map((val, key) => {
          return(
              // <li key={key} onClick={() => {window.location.pathname = val.link}} className='row'>
              <li key={key} onClick={() => {navigate(val.link)}} className='row'>
                <div id='icon'>{val.icone}</div>
                <div id='title'>{val.title}</div>
              </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Sidebar