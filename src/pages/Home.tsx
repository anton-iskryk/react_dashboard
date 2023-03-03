import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import styled from 'styled-components';

const Homepage = styled.div`
  display: flex;
  gap: 32px;
`;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const Home = () => {
  return (
    <Homepage>
      <Sidebar />

      <RightSideContainer>
        <Header />
        <Dashboard />
      </RightSideContainer>
    </Homepage>
  );
};

export default Home;
