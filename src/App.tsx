import { useState } from 'react';
import ContentContainer from './components/ContentContainer/ContentContainer';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import {BrowserRouter as Router} from "react-router-dom";
import { useMountUnmountHook } from './hooks/useMountUnmountHook';

function App() {
  const [isCollapsed,setCollapse] = useState(true)
  const onClickCollapse = ()=>{
      setCollapse(!isCollapsed)
    }
  const shouldRenderSidebar = useMountUnmountHook(!isCollapsed, 200);
  return(  
      <Router>
        <div className="flex w-screen h-screen flex-row">
          <TopBar collapse={isCollapsed} setCollapse={onClickCollapse}/>
          <div className="flex flex-row h-screen w-screen">
            { shouldRenderSidebar  && <SideBar style={isCollapsed?"animate-leave":"animate-enter"}/>}
            <ContentContainer collapse={!shouldRenderSidebar}/>
          </div>
        </div>
      </Router>
    )
}

export default App;
