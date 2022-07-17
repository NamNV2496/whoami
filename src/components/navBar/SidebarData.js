import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

import menu from '../json/menu.json'

export const SidebarData = [
  {
    title: 'Linux',
    path: '/Linux',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'C/C++',
        path: '/Services?tag=c-c++',
        icon: <IoIcons.IoIosPaper />,
        cName: "dropdown-link"
      },
      {
        title: 'Linux Driver',
        path: '/Services?tag=linuxDriver',
        icon: <IoIcons.IoIosPaper />,
        cName: "dropdown-link"
      }
    ]
  },
  {
    title: 'Java',
    path: '/java',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Java Core',
        path: '/Services?tag=javaCore',
        icon: <IoIcons.IoIosPaper />,
        cName: "dropdown-link"
      },
      {
        title: 'OSGI - Idempiere',
        path: '/Services?tag=OSGI-Idempiere',
        icon: <IoIcons.IoIosPaper />,
        cName: "dropdown-link"
      },
      {
        title: 'Spring boot',
        path: '/Services?tag=springBoot',
        icon: <IoIcons.IoIosPaper />,
        cName: "dropdown-link"
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'About',
    path: '/whoami',
    icon: <IoIcons.IoMdPeople />
  }
];
