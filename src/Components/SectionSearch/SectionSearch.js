import React from 'react';
import searchLogo from "./img/Group 287.jpg";
import selectLogo from "./img/Group 294.jpg";
import standOutLogo from "./img/2.svg";
import "./SectionSearch.css"



const SectionSearch = () => {
  return(
    <div className="SectionSearch-wrapper">
      <div  className="SectionSearch-main">
        <div className="SectionSearch-body">
          <div className="SectionSearch-container">
            <img src={searchLogo}alt="search-Logo" />
            <h5 className='SectionSearch-heading'>Search</h5>
            <p className='SectionSearch-desc'>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
          </div>
          <div className="SectionSearch-container">
        <img src={selectLogo} alt="select-Logo" />
            <h5 className='SectionSearch-heading'>Select</h5>
            <p className='SectionSearch-desc'>Choose from thousands of options generated by the slogan maker that fit your needs.</p>
          </div>
          <div className="SectionSearch-container ">
        <img className='standout-img' src={standOutLogo} alt="standOut-Logo" />
            <h5 className='SectionSearch-heading sec-3'>Stand out</h5>
            <p className='SectionSearch-desc'>Congrats on your new slogan. It's time to win the world!</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SectionSearch;
