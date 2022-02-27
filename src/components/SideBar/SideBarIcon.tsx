import React from 'react';
import { iconProp } from './SideBarIcon.d';

const SideBarIcon = ({icon, text = 'tooltip'}:iconProp) =>{
  return (
    <div className="sidebar-icon group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
export default SideBarIcon;
