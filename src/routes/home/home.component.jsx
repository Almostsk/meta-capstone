import React from "react";
import HomeBanner from "../../components/home-banner/home-banner.component";
import Catalog from "../../components/catalog/catalog.component";

const Home = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <Catalog />
    </div>
  );
};

export default Home;
