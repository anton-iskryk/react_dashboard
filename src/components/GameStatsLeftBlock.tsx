import React from 'react';
import styled from 'styled-components';
import DataTypeRating from './DataTypeRating';
import DataTypeDropdown from './DataTypeDropdown';
import DataTypeUsers from '../components/DataTypeUsers';
import LeftChart from './LeftChart';


const DropdownTitle = styled.div`
  display: flex;
  gap: 16px;
`;

const GameStatsBlock = styled.div`
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
  gap: 48px;
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

interface ChartData {
  blue: number;
  red: number;
  green: number;
  date: string;
}

interface Users {
  name: string;
  date: string;
}

interface GameStatsLeftBlockProps {
  chartData: ChartData[];
  users: Users[];
}

const GameStatsLeftBlock: React.FC<GameStatsLeftBlockProps> = ({ chartData, users }) => {
  return (
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
  );
};

export default GameStatsLeftBlock;
