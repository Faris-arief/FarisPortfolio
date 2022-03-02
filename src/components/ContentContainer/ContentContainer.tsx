
import {contentProp} from './ContentContainer.d'
import MainPage from '../../pages/MainPage';
import {
  Routes,
  Route,
} from "react-router-dom";
const ContentContainer = ({collapse}:contentProp)=> {
  return (
    <div className={ (collapse? "w-[100%]" : "w-[calc(100%-4rem)]") + ' flex flex-col h-screen'}>
      <div className="flex h-topbar w-100%"></div>
      <div className="h-[calc(100%-4rem)]">
          <div className= 'h-[100%] w-[100%] overflow-y-scroll overflow-x-clip'>
            <Routes>
              <Route path="/" element={<MainPage/>}/> 

              <Route path="/*" element={<div><p>Test</p></div>}>
                
              </Route> 
            </Routes>
          </div>
      </div>
    </div>
  )
}
export default ContentContainer;
