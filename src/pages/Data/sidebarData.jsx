import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as TiIcons from 'react-icons/ti';

const SidebarData = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    id: 2,
    title: 'Groups',
    path: '/groups',
    icon: <MdIcons.MdGroups />,
    cName: 'nav-text',
  },
  {
    id: 3,
    title: 'Channels',
    path: '/channels',
    icon: <GrIcons.GrChannel />,
    cName: 'nav-text',
  },
  {
    id: 4,
    title: 'Message',
    path: '/message',
    icon: <TiIcons.TiMessages />,
    cName: 'nav-text',
  },
  {
    id: 5,
    title: 'Accounts',
    path: '/accounts',
    icon: <MdIcons.MdSupervisorAccount />,
    cName: 'nav-text',
  },
  {
    id: 6,
    title: 'Login',
    path: '/login',
    icon: <MdIcons.MdLogin />,
    cName: 'nav-text',
  },
];

export default SidebarData;
