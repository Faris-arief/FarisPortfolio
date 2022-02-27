import React, { useEffect, useState } from 'react';
import {contentProp} from './ContentContainer.d'
const ContentContainer = ({collapse}:contentProp)=> {
  return (
    <div className='flex flex-col w-[100%] h-screen'>
      <div className="flex h-topbar w-screen"></div>
      <div className="flex w-[100%] h-[100%]">
          {collapse?'':<div className='w-sidebar h-[100%] bg-containerprimary'/>}
          <div className='pl-4 pt-4 flex w-[100%] h-[100%] bg-containerprimary text-white'>
            <p>Test<br/></p>
            <p>POOP</p>

          </div>
      </div>
    </div>
  )
}
export default ContentContainer;
