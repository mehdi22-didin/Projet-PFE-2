import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Sidebar_Data } from './sidebar_Data';
import Submenu from './sub_menu';
import {IconContext} from 'react-icons/lib';
import './side_bar.css';
import './Topbar.css';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {indicRows} from '../../Data';
import {indicColumns2} from '../../Data';
import homme from '../../photos/homme.jpg'

const Nav = styled.div`
    background : #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center; 
`;
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SidebarNav = styled.nav`
    background: #15171c;
    width : 250px;
    height: 100%;
    display: flex;
    justify-content: center;
    position : fixed;
    top: 0;
    left : ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition : 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

function Side_bar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar) 
  return (
    <div className='Sidebar1'>
        <IconContext.Provider value={{color : '#ffff'}}>
        <Nav>
        
       
            <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar}/>
                <div className='topright'>
                <div className="topbariconcountainer">
                <IoIcons.IoMdNotifications value={{color : '#ffff'}}/>
                <span className="topiconbadge">2</span>
                </div>
                <div className="topbariconcountainer">
                <IoIcons.IoMdSettings value={{color : '#ffff'}}/>
                </div>
                <img src={homme} alt="" className="imagestyle" />
        </div>
            </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap> 
                <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon>
                {Sidebar_Data.map((item, index)=>{
                    return <Submenu item={item} key={index}/>;
                })}
            </SidebarWrap>
        </SidebarNav>
        </IconContext.Provider>
    </div >

  )
}

export default Side_bar