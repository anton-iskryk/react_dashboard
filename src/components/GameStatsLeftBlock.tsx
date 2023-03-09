import React from 'react';
import styled from 'styled-components';
import DataTypeRating from './DataTypeRating';
import DataTypeDropdown from './DataTypeDropdown';
import DataTypeUsers from '../components/DataTypeUsers';
import LeftChart from './LeftChart';
import { GameStatsLeftBlockProps } from '../interfaces/interfaces';


const DropdownTitle = styled.div`
  display: flex;
  gap: 16px;
`;

const GameStatsBlockContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

const GameStatsBlock = styled.div`
  width: 100%;
  min-width: 1312px;
  max-height: 344px;
  padding: 24px 32px 32px;

  background: #242731;
  border-radius: 4px;
`;

const GameStatsHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const GameStatsContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  gap: 50px;
`;

const GameStatsHeaderTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  color: #fff;
`;

const DataType = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.6);
`;

const GameStatsLeftBlock: React.FC<GameStatsLeftBlockProps> = ({ chartData, users }) => {
  return (
    <GameStatsBlockContainer>
      <GameStatsBlock>
        <GameStatsHeader>
          <GameStatsHeaderTitle>Game Stats</GameStatsHeaderTitle>

          <DropdownTitle>
            <DataType>Data type</DataType>
            <DataTypeDropdown />
          </DropdownTitle>
        </GameStatsHeader>

        <GameStatsContainer>
          <LeftChart chartData={chartData} />
          <DataTypeRating />
          <DataTypeUsers users={users} />
        </GameStatsContainer>
      </GameStatsBlock>
    </GameStatsBlockContainer>
  );
};

export default GameStatsLeftBlock;
