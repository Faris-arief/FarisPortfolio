import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import {CollapseProp} from './CollapseIcon.d'


const CollapseIcon = ({collapse, setCollapse}:CollapseProp) =>{
  return (
    <div onClick={()=>setCollapse()} className="relative flex items-center justify-center cursor-pointer
    h-14 w-14 min-w-fit  my-2 mx-auto bg-iconprimary text-textprimary
     hover:bg-iconsecondary hover:text-textsecondary rounded-full
       transition-all ease-in hover:animate-pulse">
      {collapse? <BsArrowRightCircle size="32"></BsArrowRightCircle>: <BsArrowLeftCircle size="32"></BsArrowLeftCircle>}
    </div>
  );
}
export default CollapseIcon;
