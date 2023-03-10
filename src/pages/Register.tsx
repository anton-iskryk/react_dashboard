import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #242731;
`;

const RegisterTitle = styled.h1`
  margin-bottom: 8px;

  font-weight: 500;
  font-size: 48px;
  line-height: 56px;

  color: #FFFFFF;
`;

const RegisterDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;

  color: #9496A6;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const InputsContainer = styled.div`
  margin: 48px 0;
`;

const RegisterInput = styled.input`
  width: 100%;
  padding: 20px;

  border: none;
  border: 1px solid #3D4250;
  border-radius: 8px;

  font-weight: 400;
  font-size: 15px;
  line-height: 24px;

  color: #7D7F8E;
  background-color: transparent;
  outline: none;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const RegisterButton = styled.button`
  padding: 20px;
  margin-bottom: 48px;

  font-weight: 500;
  font-size: 15px;
  line-height: 24px;

  background-color: #8941FF;
  color: #FFFFFF;
  border: 1px solid #8941FF;
  border-radius: 8px;

  cursor: pointer;
  transition: background-color .3s;

  &:hover {
    background-color: transparent;
  }
`;

// const ToHomepageLink = {
//   fontWeight: '500',
//   fontSize: '15px',
//   lineHeight: '24px',
//   color: '#fff',
//   textDecoration: 'none',
// };

const Span = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;

  color: #fff;
  text-align: center;
`;

const LoginLink = {
  fontWeight: '500',
  fontSize: '15px',
  lineHeight: '24px',
  color: '#78B4ED',
  textDecoration: 'none',
};

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Welcome</RegisterTitle>
      <RegisterDescription>Welcome! Please enter your details</RegisterDescription>
      <RegisterForm>
        <InputsContainer>
          <RegisterInput
            required
            type="text"
            placeholder='Name'
            name='name'
            onChange={handleChange}
          />

          <RegisterInput
            required
            type="email"
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />

          <RegisterInput
            required
            type="password"
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
        </InputsContainer>

        <RegisterButton
          onClick={handleSubmit}
        >
          Create account
        </RegisterButton>

        {error && <p>{error}</p>}

        <Span>Or <Link
            style={LoginLink}
            to='/login'
          >
            Log in
          </Link>
        </Span>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
