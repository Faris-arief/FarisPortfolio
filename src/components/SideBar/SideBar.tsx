import React from 'react';
import SideBarIcon from './SideBarIcon';
import SideBarTitle from './SideBarTitle';

import { IoMdHelp} from 'react-icons/io'
import {AiOutlineHome, AiOutlineAppstore} from 'react-icons/ai'

const SideBar = () =>{
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col text-center bg-primary text-secondary shadow">
        <SideBarTitle/>
        <Divider/>
        <SideBarIcon icon ={<AiOutlineHome size="32" />} text= "Home"/>
        <SideBarIcon icon ={<AiOutlineAppstore size="32" />} text= "Projects"/>
        <SideBarIcon icon ={<IoMdHelp size="32"/>} text="Help"/>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
