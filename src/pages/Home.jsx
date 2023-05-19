import React from "react";
import NavBar from "../components/NavBar";
import SearchFlight from "../components/SearchFlight";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <SearchFlight />
      </div>
    </div>
  );
};

export default Home;
