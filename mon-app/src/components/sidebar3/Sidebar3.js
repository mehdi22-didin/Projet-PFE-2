import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {SideBarData3} from './SideBarData3'
import SubMenu from './SubMenu';
import './sidebar3.css'
const SidebarNav = styled.nav`
    background: #15171c;
    width : 250px;
    height: 100%;
    display: flex;
    justify-content: center;
    position : fixed;
    top: 0;
`;
const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar3 = () => {
  return (
    <div className='Sidebar3'>
        <SidebarNav>
            <SidebarWrap> 
                {SideBarData3.map((item, index)=>{
                    return <SubMenu item={item} key={index}/>;
                })}
            </SidebarWrap>
        </SidebarNav>
    </div>
  )
}

export default Sidebar3