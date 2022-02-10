import React from 'react';
import "./HeaderRight.css"

const HeaderRight = () => {
  return (
  <div className='headerRightMain'>
  <a className='signIn hd-rt-font' href=''>
      Sign in
  </a>
  <button className='pcButton'>
      <p className='hd-rt-font'>Dukaan for PC</p>
  </button>
  <div className='blueSpace'>
  </div>

  </div>
  );
};

export default HeaderRight;
