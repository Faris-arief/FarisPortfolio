import { BiExpand, BiCollapse } from 'react-icons/bi';
import {CollapseProp} from './CollapseIcon.d'


const CollapseIcon = ({collapse, setCollapse}:CollapseProp) =>{
  return (
    <div onClick={()=>setCollapse()} className="relative flex items-center justify-center cursor-pointer
    h-14 w-14 min-w-fit  my-2 mx-auto bg-iconprimary text-textprimary
     hover:bg-iconsecondary hover:text-textsecondary rounded-full
       transition-all ease-in hover:animate-pulse">
      {collapse? <BiExpand size="32"></BiExpand>: <BiCollapse size="32"></BiCollapse>}
    </div>
  );
}
export default CollapseIcon;
