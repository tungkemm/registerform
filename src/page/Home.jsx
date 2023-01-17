import React from "react";
import HomeContainer from "../components/containers/HomeContainer";
import Header from "../components/home/header/Header";
import Sidebar from "../components/home/sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar>
        <HomeContainer />
      </Sidebar>
    </div>
  );
};

export default Home;
