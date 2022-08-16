import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const Sidebar_Data = [
    {
        title : 'Indicateur',
        path : '/indicateur',
        icon : <AiIcons.AiFillHome />,
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
    }
]