import React from 'react';
import styled from 'styled-components';
import Logo from '../img/dashboard_logo.png';
import SBIcon1 from '../img/sidebar_logo_1.svg';
import SBIcon2 from '../img/sidebar_logo_2.svg';
import SBIcon3 from '../img/sidebar_logo_3.svg';
import SBIcon4 from '../img/sidebar_logo_4.svg';
import SBIcon5 from '../img/sidebar_logo_5.svg';
import SBIcon6 from '../img/sidebar_logo_6.svg';

const SidebarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #242731;
  height: 100vh;
  min-width: 84px;
`;

const SidebarLogo = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: 14px 0 50px;
`;

const SidebarList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0;
  height: 100%;
`;

const SidebarIcon = styled.img`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 12px;
  background-color: #191C23;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8941FF;
    fill: #fff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarBlock>
      <SidebarLogo src={Logo} alt='logo'/>

      <SidebarList> 
        <SidebarIcon src={SBIcon1} alt='sidebar icon' />
        <SidebarIcon src={SBIcon2} alt='sidebar icon' />
        <SidebarIcon src={SBIcon3} alt='sidebar icon' />
        <SidebarIcon src={SBIcon4} alt='sidebar icon' />
        <SidebarIcon src={SBIcon5} alt='sidebar icon' />
        <SidebarIcon src={SBIcon6} alt='sidebar icon' />
      </SidebarList>
    </SidebarBlock>
  );
};

export default Sidebar;
