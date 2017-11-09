import React from 'react';
import Navbar from './../molecules/Navbar';
import TilesContainer from '../molecules/TilesContainer';

const Dashboard = () => {
  return [
    <Navbar key="1" />,
    <TilesContainer key="2" />
  ]
};

export default Dashboard;
