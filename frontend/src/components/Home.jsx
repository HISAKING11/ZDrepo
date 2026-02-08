import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      {/* Background div */}
      <div className="bg">
        
      </div>

      <div className="home">
        <div className="content">
        <h1>Welcome to ZD Art Gallery</h1>
        <p>Discover creativity and visual expression</p>
        </div>
        
        <div className="marquee marquee-left">
        <span>
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
        </span>
        </div>

        <div className="marquee marquee-right">
        <span>
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
          zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp; zdartgallery &nbsp;
        </span>
        </div>
      </div>
    </>
  );
};

export default Home;
