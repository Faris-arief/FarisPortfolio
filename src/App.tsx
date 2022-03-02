import { useState } from 'react';
import { animated, useTransition} from 'react-spring'
import ContentContainer from './components/ContentContainer/ContentContainer';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  const [isCollapsed,setCollapse] = useState(false)
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
      <Router>
        <div className="flex w-screen h-screen flex-row">
          <TopBar collapse={isCollapsed} setCollapse={onClickCollapse}/>
          <div className="flex flex-row h-screen w-screen">
            { !isCollapsed ?<SideBar/>:''}
            <ContentContainer collapse={isCollapsed}/>
          </div>
        </div>
      </Router>
    )
}

export default App;
