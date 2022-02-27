import React from 'react';
import CollapseIcon from './CollapseIcon';
import {CollapseProp} from './CollapseIcon.d'

const TopBar = ({collapse, setCollapse}:CollapseProp) =>{
  return (
    <div className="z-10 fixed top-0 left-0 h-topbar w-screen m-0 flex flex-col content-start text-center bg-primary text-secondary shadow">
      <div className='h-topbar w-20 flex items-center content-start shadow'>
          <CollapseIcon collapse ={collapse} setCollapse={setCollapse}/>
      </div>
    </div>
  );
}


export default TopBar;
