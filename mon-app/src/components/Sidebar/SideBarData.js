import React from 'react';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@mui/icons-material/Group';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    {
        title : 'Home',
        icone: <HomeIcon />,
        link : '/home'
    },
    {
        title : 'Indicateur',
        icone: <DragIndicatorIcon />,
        link : '/indicateur',
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
            title : 'Créer Indicateur',
            path : '/indicateur/créerIndicateur',
            icon : <IoIcons.IoIosPaper />,},
            {
            title : 'Saise Manuelle',
            path : '/indicateur/SaisieManuelle',
            icon : <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title : 'Dashbord',
        icone: <DashboardIcon />,
        link : '/dashbord',
    },
    {
        title : 'Essaie',
        icone: <DescriptionIcon />,
        link : '/essaie',
    },
    {
        title : 'Utilisateurs',
        icone: <GroupIcon />,
        link : '/utilisateurs',
    },
    {
        title : 'Login',
        icone: <HelpOutlineOutlinedIcon />,
        link : '/Login',
    },
    

]
