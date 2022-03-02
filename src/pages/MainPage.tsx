import { useEffect, useState } from "react";

const MainPage = ()=> {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = ()=>setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return ()=>window.removeEventListener("scroll",handleScroll)
  }, [])
  return (
    <div className='relative flex align-center flex-col w-full h-[200%] justify-start ' style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
      <div className=" absolute bg-main bg-contain bg-no-repeat w-[1080px] h-[1280px]"
      style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
      </div>
      <div className="absolute z-10 bg-mainback bg-contain bg-no-repeat w-[1080px] h-[1280px]"
        style={{transform: `translateY(${offsetY * 0.25}px)`}}>  
        </div>
    </div>
  )
}
export default MainPage;
