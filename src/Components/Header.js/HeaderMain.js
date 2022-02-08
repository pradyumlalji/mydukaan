import React, { useState } from 'react';
import { Affix } from 'antd';
import "antd/dist/antd.css";

import HeaderLeft from './HeaderLeft';
import "./HeaderMain.css"
import HeaderRight from './HeaderRight';




const Header: React.FC = () => {
  const [top, setTop] = useState(0);

  return (
    <>
      <Affix  offsetTop={top}>
        <div className='HeaderMain'>
          <div className='HeaderMain-body'>

            <HeaderLeft />

            <HeaderRight />

          </div>
          
        </div>
      </Affix>
      <div>

      </div>
    </>
  );
};


const HeaderMain = () => {
return(
  <div>
  <Header />
  </div>
)
 

}


export default HeaderMain;
