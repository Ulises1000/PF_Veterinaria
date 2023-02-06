import React from "react";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Nav />
      <div className="h-full mt-20 bg-red-500 ">
        <h1>NotFound</h1>
      </div>
    </div>
  );
};

export default Home;
