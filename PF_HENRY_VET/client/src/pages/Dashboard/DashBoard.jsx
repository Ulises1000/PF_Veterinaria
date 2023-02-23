import React from 'react';
import Menu from '../../components/Dashboard/Menu';

const DashBoard = ({hayUser}) => {
  return (
    <div>
      <Menu hayUser = {hayUser}/>
    </div>
  );
}

export default DashBoard;
