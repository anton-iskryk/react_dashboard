import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string,
  date: string,
};

interface Users {
  name: string;
  date: string;
}

interface DataTypeUsersProps {
  users: Users[];
}

const UsersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #FFFFFF;
`;

const UserDate = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;

  color: rgba(255, 255, 255, 0.6);
`;

const DataTypeUsers: React.FC<DataTypeUsersProps> = ({ users }) => {
  return (
    <UsersBlock>
      {users.map(user => (
        <>
          <UserContainer>
            <UserName>{user.name}</UserName>
            <UserDate>{user.date}</UserDate>
          </UserContainer>
        </>
      ))}
    </UsersBlock>
  );
};

export default DataTypeUsers;
