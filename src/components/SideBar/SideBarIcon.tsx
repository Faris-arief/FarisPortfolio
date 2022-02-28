import React from 'react';
import { useNavigate  } from "react-router-dom";
import { iconProp } from './SideBarIcon.d';

const SideBarIcon = ({icon, text = 'tooltip', path}:iconProp) =>{
  let navigate = useNavigate()
  let navigateTo = (path:string)=>{navigate(path)}
  return (
    <div className="sidebar-icon group " onClick={()=>navigateTo(path as string)}> 
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
export default SideBarIcon;
