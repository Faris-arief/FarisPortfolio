
import {contentProp} from './ContentContainer.d'
import MainPage from '../../pages/MainPage';
import {
  Routes,
  Route,
} from "react-router-dom";
const ContentContainer = ({collapse}:contentProp)=> {
  return (
    <div className='flex flex-col w-[100%] h-screen'>
      <div className="flex h-topbar w-screen"></div>
      <div className="flex w-[100%] h-[calc(100%-80px)]">
          {collapse?'':<div className='w-sidebar h-[100%] bg-containerprimary'/>}
          <div className= {collapse? 'h-[100%] w-[100%]': 'h-[100%] w-[calc(100%-80px)]' }>
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
