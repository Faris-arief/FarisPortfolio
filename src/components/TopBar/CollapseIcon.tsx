import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import {CollapseProp} from './CollapseIcon.d'
import farisLogo from '../../images/farisSideIcon.png'


const CollapseIcon = ({collapse, setCollapse}:CollapseProp) =>{
  return (
    <div onClick={()=>setCollapse()} className="relative flex items-center justify-center cursor-pointer
    h-14 w-14 min-w-fit  my-2 mx-auto bg-white 
     hover:bg-iconprimary hover:text-textsecondary rounded-full
       transition-all ease-in hover:animate-pulse">
         <img className={(collapse? "" : "scale-x-[-1]" )+ ' w-12 h-12 transition-all duration-100 ease-in-out'} src={farisLogo} alt="Faris Logo"/>
      
    </div>
  );
}
//{collapse? <BsArrowRightCircle size="32"></BsArrowRightCircle>: <BsArrowLeftCircle size="32"></BsArrowLeftCircle>}
export default CollapseIcon;
