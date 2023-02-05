import React from "react";
import Nav from "../../components/Nav/Nav";

const NotFound = ({ user }) => {
  return (
    <div>
      <Nav user={user} />
      <h1>NotFound</h1>
    </div>
  );
};

export default NotFound;
