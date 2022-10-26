import React from "react";
import Products from "../Products/Products";

import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="home_Banner">
        <div className="home_image">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="oops"
          />
        </div>
      </div>
      <div className="products">
        <Products />
      </div>
    </React.Fragment>
  );
}

export default Home;
