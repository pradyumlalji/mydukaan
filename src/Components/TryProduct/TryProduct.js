import React from 'react';
import "./TryProduct.css"
import card1 from "./img/Rectangle 124.jpg";
import card2 from "./img/Rectangle 125.jpg";
import card3 from "./img/Rectangle 126.jpg";
import card4 from "./img/Rectangle 127.jpg";



const TryProduct = () => {
  return (
    <div className='TryProduct-main'>
      <div className='TryProduct-body'>
      <h2>Try our other free products</h2>
        <div className='TryProduct-container'>
          
            <div className="card">
            <img src={card1} alt="product Img" />
            <h5 className='tryproduct-title'>Privacy Policy Generator</h5>
            <p className='tryproduct-desc'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>

            </div>
            <div className="card">
          <img src={card2} alt="product Img" />
          <h5 className='tryproduct-title'>Terms & Conditions Generator</h5>
          <p className='tryproduct-desc'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            <div className="card">
          <img src={card3} alt="product Img" />
          <h5 className='tryproduct-title'>Domain Name Generator</h5>
          <p className='tryproduct-desc'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            <div className="card">
            <img src={card4} alt="product Img" />
            <h3 className='tryproduct-title'>Invoice Generator</h3>
            <p className='tryproduct-desc'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
          </div>
        </div>
      </div>
      </div>
      
      )
}

      export default TryProduct;
