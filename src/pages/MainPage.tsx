import { useEffect, useRef, useState } from "react";
import {mainPageProp} from '../definitions/pageDefinitions.d';
const MainPage = ( {offsetY}:mainPageProp)=> {
  const [translateY, setTranslateY] = useState(0);


  useEffect(()=>{
    setTranslateY(offsetY)

  }, [offsetY])
  return (
    <div className='relative flex align-center flex-col w-full h-[150%] justify-start '>
      <div className="bg-main bg-cover  w-[100%] h-[100%]"
      style={{transform: `translateY(${translateY * 0.5}px)`}}>
      </div>
      <div className="absolute top-[10%] left-20 z-10 bg-mainEle bg-contain bg-no-repeat w-32 h-32"
        style={{transform: `translateY(${translateY * 0.10}px)`}}>  
      </div>
      <div className="absolute top-[10%] right-20 z-10 bg-mainEle bg-contain bg-no-repeat w-32 h-32"
        style={{transform: `translateY(${translateY * 0.10}px) rotate(90deg)`}}>  
      </div>
      <div className="absolute top-[20%] right-20 z-10 bg-mainEle bg-contain bg-no-repeat w-32 h-32"
        style={{transform: `translateY(${translateY * 0.10}px) rotate(180deg)`}}>  
      </div>
      <div className="absolute top-[20%] left-20 z-10 bg-mainEle bg-contain bg-no-repeat w-32 h-32"
        style={{transform: `translateY(${translateY * 0.10}px) rotate(270deg)`}}>  
      </div>
    </div>
  )
}
export default MainPage;
