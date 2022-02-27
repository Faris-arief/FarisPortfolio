import { useState } from 'react';
import { animated, useTransition} from 'react-spring'
import ContentContainer from './components/ContentContainer/ContentContainer';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';


function App() {
  const [isCollapsed,setCollapse] = useState(true)
  const sideBarTransition = useTransition(!isCollapsed, {
    from:{ x:-100, y:0, opacity: 0 },
    enter:{x:0, y:0, opacity:1},
    leave:{x:-100, y:0, opacity: 0 },

  })
  const onClickCollapse = ()=>{
      console.log(isCollapsed)
      setCollapse(!isCollapsed)
    }
  return(    
  <div className="flex w-screen h-screen">
    <TopBar collapse={isCollapsed} setCollapse={onClickCollapse}/>
    {sideBarTransition((style,item) => item ?<animated.div style={style}><SideBar/></animated.div>:'')}
    <ContentContainer collapse={isCollapsed}/>
  </div>)

}

export default App;
