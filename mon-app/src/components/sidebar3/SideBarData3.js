import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';



export const SideBarData3 = [
    {
        title : 'Indicateur',
        path : '/indicateur',
        icon : <AiIcons.AiFillHome />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
            title : 'Créer Indicateur',
            path : '/indicateur/CreatIndic',
            icon : <IoIcons.IoIosPaper />,},
            {
            title : 'Saise Manuelle',
            path : '/indicateur/SaisieManuelle',
            icon : <IoIcons.IoIosPaper />,
            },
            {
            title : 'Enregistrement Numérique',
            path : '/indicateur/EnregistrementNum',
            icon : <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title : 'Dashbord',
        icon: <MdIcons.MdOutlineDashboard />,
        path : '/dashbord',
    },
    {
        title : 'Essaie',
        icon: <HiIcons.HiDocumentReport />,
        path : '/essaie',
    },
    {
        title : 'Utilisateurs',
        icon: <FiIcons.FiUsers />,
        path : '/utilisateurs',
    },
    {
        title : 'Login',
        icon: <BiIcons.BiLogIn />,
        path : '/Login',
    },
]
