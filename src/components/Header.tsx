import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userIcon from '../img/user_icon.svg';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;
  margin-bottom: 24px;
`;

const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  text-transform: uppercase;

  color: #fff;
`;

const HeaderLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LoginIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 6px;
  background-color: #242731;
`;

const LoginUserName = {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#fff',
  textDecoration: 'none',
}

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>
        dashboard
      </HeaderTitle>

      <HeaderLogin>
        <LoginIcon src={userIcon} alt='logo' />
        <Link style={LoginUserName} to='/login'>Username</Link>
      </HeaderLogin>
    </HeaderBlock>
  );
};

export default Header;
