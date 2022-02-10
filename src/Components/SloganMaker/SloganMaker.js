import React from "react";
import "./SloganMaker.css";
import cross from "./img/cross.jpg";


const SloganMaker = () => {



    const slogans = [
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "coziness building for tomorrow",
            id: 1

        },
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "Review the facts cool is the best.",
            id: 2

        }, {
            leftContent: "Review the facts cool is the best.",
            rightContent: "coziness building for tomorrow",
            id: 3
        },
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "coziness building for tomorrow",
            id: 4
        },
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "coziness building for tomorrow",
            id: 5
        },
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "coziness building for tomorrow",
            id: 6
        },
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "coziness building for tomorrow",
            id: 7
        },
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "coziness building for tomorrow",
            id: 8
        },
        {
            leftContent: "There is no Sore it will Not Heal, No cool it will not Subdue.",
            rightContent: "coziness building for tomorrow",
            id: 9
        }
    ]
    
    
   
    return (

        // <div className="sloganMaker-Wrapper">
        <div className="SloganMaker-Main">
            <div className="SloganMaker-Body">

                <div className="heading">
                    <p className="slogan-title">Free slogan maker</p>
                </div>
                <div className="sub-heading">
                    <h5 className="sub-hd-font">Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</h5>
                </div>
                <div className="input-bar-section">
                    <p className="label">Word for your slogan</p>
                    <input type="text" className="slogan-input" />
                    <img className="cross-img" src={cross} alt="cross-logo" />
                </div>

                <button className="generate-slogan-btn ">Generate slogans</button>

                <div className="generated-slogan-title">
                    <h5>We have generated 1,023 slogans for “cozy”</h5>
                    <button className="download-all-btn">Download all</button>
                </div>



                <div className="slogan-wrapper">
                    {slogans.map((item, idx) =>
                        <div className="slogan-section">
                            
                                <div key={item.id} className="slogan-bar">
                                <p className="bar-content">{item.leftContent}</p>  
                                </div>
                            


                            <div className="slogan-bar">
                                <p className="bar-content">{item.rightContent}</p>
                            </div>
                        </div>
                    )}

                </div> 
                <div className="pagination">
                    <a className="page-active" href=" ">1</a>
                    <a className="page" href=" ">2</a>
                    <a className="page" href=" ">3</a>
                    <a className="page" href=" ">...</a>
                    <a className="page" href=" ">21</a>

                    <a className="next-btn " href=" ">Next ></a>

                </div>

            </div>

        </div>
        // </div>
    );
};

export default SloganMaker;
