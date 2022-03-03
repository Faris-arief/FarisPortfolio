
import {contentProp} from './ContentContainer.d'
import MainPage from '../../pages/MainPage';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
const ContentContainer = ({collapse}:contentProp)=> {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = ()=>{
    setOffsetY(divRef.current.scrollTop)
    };

  const divRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(()=>{
    if (divRef && divRef.current) 
      divRef.current.addEventListener("scroll",handleScroll)
    return ()=> divRef.current.removeEventListener("scroll",handleScroll)
  }, [])
  return (
    <div className={ (collapse? "w-[100%]" : "w-[calc(100%-4rem)]") + ' flex flex-col h-screen'}>
      <div className="flex h-topbar w-100%"></div>
      <div className="h-[calc(100%-4rem)]">
          <div className= 'h-[100%] w-[100%] overflow-y-scroll overflow-x-clip' ref={divRef}>
            <Routes>
              <Route path="/" element={<MainPage offsetY={offsetY}/>}/> 

              <Route path="/*" element={<div><p>Test</p></div>}>
                
              </Route> 
            </Routes>
          </div>
      </div>
    </div>
  )
}
export default ContentContainer;
