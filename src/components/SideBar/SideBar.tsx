import React from 'react';
import SideBarIcon from './SideBarIcon';

import { IoMdHelp} from 'react-icons/io'
import {AiOutlineHome, AiOutlineAppstore} from 'react-icons/ai'
const SideBar = () =>{
  return (
    <div className=" fixed top-0 left-0 h-screen w-sidebar m-0 flex flex-col text-center bg-primary text-secondary shadow">
        <div className='h-topbar flex items-center content-center'/>
        <SideBarIcon icon ={<AiOutlineHome size="32" />} path="/" text= "Home"/>
        <SideBarIcon icon ={<AiOutlineAppstore size="32" />} text= "Projects" path="/projects"/>
        <SideBarIcon icon ={<IoMdHelp size="32"/>} text="Help" path="/help"/>
    </div>
  );
}


export default SideBar;
