import React from 'react';
import styled from 'styled-components';
import LocationDropdown from '../components/LocationDropdown';
import RightChart from '../components/RightChart';

const DropdownTitle = styled.div`
  display: flex;
  gap: 16px;
`;

const GameStatsBlock = styled.div`
  width: 100%;
  min-width: 428px;
  max-height: 344px;
  padding: 24px 32px 32px;

  background: #242731;
  border-radius: 4px;
`;

const GameStatsHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 32px;
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

const GameStatsRightBlock: React.FC = () => {
  return (
    <GameStatsBlock>
      <GameStatsHeader>
        <GameStatsHeaderTitle>Game Stats</GameStatsHeaderTitle>

        <DropdownTitle>
          <DataType>Location</DataType>
          <LocationDropdown />
        </DropdownTitle>
      </GameStatsHeader>

      <RightChart />
    </GameStatsBlock>
  );
};

export default GameStatsRightBlock;
