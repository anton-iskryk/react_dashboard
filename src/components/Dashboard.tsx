import React from 'react';
import styled from 'styled-components';
import frameIcon1 from '../img/upper_frame_1.svg';
import frameIcon2 from '../img/upper_frame_2.svg';
import frameIcon3 from '../img/upper_frame_3.svg';
import frameIcon4 from '../img/upper_frame_4.svg';
import frameIcon5 from '../img/upper_frame_5.svg';
import GameStats from './GameStats';
import DataTypeDropdown from './DataTypeDropdown';

const UpperFramesBlock = styled.div`
  display: flex;
  gap: 20px;
`;

const UpperFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  width: 335px;
  height: 104px;
  background-color: #242731;
  box-shadow: 0px 8px 28px rgba(48, 48, 49, 0.1);
  border-radius: 8px;
`;

const UpperFrameIcon1 = styled.img`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-left: 20px;
  background: rgba(66, 204, 88, 0.15);
  border-radius: 8px;
`;

const UpperFrameIcon2 = styled.img`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-left: 20px;
  background: rgba(73, 152, 238, 0.15);
  border-radius: 8px;
`;

const UpperFrameIcon3 = styled.img`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-left: 20px;
  background: rgba(242, 93, 93, 0.15);
  border-radius: 8px;
`;

const UpperFrameIcon4 = styled.img`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-left: 20px;
  background: rgba(244, 167, 50, 0.15);
  border-radius: 8px;
`;

const UpperFrameIcon5 = styled.img`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-left: 20px;
  background: rgba(155, 83, 248, 0.15);
  border-radius: 8px;
`;

const UpperFrameDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Number = styled.span`
  font-weight: 400;
  font-size: 44px;
  line-height: 48px;

  color: #FFFFFF;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  color: #A2A4A8;
`;

const DropdownTitle = styled.div`
  display: flex;
  gap: 16px;
`;

const GameStatsBlock = styled.div`
  max-width: 1312px;
  max-height: 344px;
  padding: 32px;

  background: #242731;
  border-radius: 4px;
`;

const GameStatsHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const GameStatsHeaderTitle = styled.span`
  margin-bottom: 24px;

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

const Dashboard = () => {
  return (
    <>
    <UpperFramesBlock>
      <UpperFrame>
        <UpperFrameIcon1 src={frameIcon1} alt='frame icon' />

        <UpperFrameDescription>
          <Number>14</Number>
          <Title>IAM Users</Title>
        </UpperFrameDescription>
      </UpperFrame>
      
      <UpperFrame>
        <UpperFrameIcon2 src={frameIcon2} alt='frame icon' />

        <UpperFrameDescription>
          <Number>91</Number>
          <Title>IAM Roles</Title>
        </UpperFrameDescription>
      </UpperFrame>

      <UpperFrame>
        <UpperFrameIcon3 src={frameIcon3} alt='frame icon' />

        <UpperFrameDescription>
          <Number>72</Number>
          <Title>IAM Policies</Title>
        </UpperFrameDescription>
      </UpperFrame>

      <UpperFrame>
        <UpperFrameIcon4 src={frameIcon4} alt='frame icon' />

        <UpperFrameDescription>
          <Number>35</Number>
          <Title>Compute Resources</Title>
        </UpperFrameDescription>
      </UpperFrame>

      <UpperFrame>
        <UpperFrameIcon5 src={frameIcon5} alt='frame icon' />

        <UpperFrameDescription>
          <Number>21</Number>
          <Title>Games</Title>
        </UpperFrameDescription>
      </UpperFrame>
    </UpperFramesBlock>

    <GameStatsBlock>
      <GameStatsHeader>
        <GameStatsHeaderTitle>Game Stats</GameStatsHeaderTitle>

        <DropdownTitle>
          <DataType>Data type</DataType>
          <DataTypeDropdown />
        </DropdownTitle>
      </GameStatsHeader>

      <GameStats />
    </GameStatsBlock>
    </>
  );
};

export default Dashboard;
