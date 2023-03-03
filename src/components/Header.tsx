import React from 'react';
import styled from 'styled-components';
import userIcon from '../img/user_icon.svg';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  width: calc(100% - 48px);
  max-width: 1920px;
  /* margin: auto; */
`;

const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  text-transform: uppercase;

  color: #FFFFFF;
`;

const HeaderLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LoginIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding: 6px;
  background-color: #242731;
`;

const LoginUserName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>
        dashboard
      </HeaderTitle>
      <HeaderLogin>
        <LoginIcon src={userIcon} alt='logo' />
        <LoginUserName>Username</LoginUserName>
      </HeaderLogin>
    </HeaderBlock>
    
    // <div className='home'>
    //   <div className="posts">
    //     {posts.map(post => (
    //       <div className="post" key={post.id}>
    //         <div className='img'>
    //           <img src={post.img} alt="post" />
    //         </div>
    //         <div className="content">
    //           <Link className='link' to={`/post/:${post.id}`}>
    //             <h1>{post.title}</h1>
    //           </Link>
    //             <p>{post.desc}</p>
    //             <button>Read more</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Header;
