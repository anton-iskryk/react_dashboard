/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import frameIcon1 from '../img/upper_frame_1.svg';
import frameIcon2 from '../img/upper_frame_2.svg';
import frameIcon3 from '../img/upper_frame_3.svg';
import frameIcon4 from '../img/upper_frame_4.svg';
import frameIcon5 from '../img/upper_frame_5.svg';
import GameStats from './GameStats';
import DataTypeDropdown from './DataTypeDropdown';
import DataTypeRating from './DataTypeRating';
import axios from 'axios';
import Loader from '../components/Loader';

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

const GameStatsContainer = styled.div`
  display: flex;
  align-items: center;
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

interface Data {
  statistic: {
    iam_users: number;
    iam_roles: number;
    iam_policies: number;
    compute_resources: number;
    games: number;
  };
  chartData: {
    blue: number;
    red: number;
    green: number;
    date: string;
  }[];
  users: {
    name: string;
    date: string;
  }[];
  general_sales_time: {
    model: {
      image: string | null;
      name: string;
    };
    card_name: string;
    card_number: string;
    type: string;
    limited: number;
    operations: number;
    date: string;
    rating: number;
    status: string;
    price: string;
  }[];
}

const Dashboard = () => {
  // const [statistic, setStatistic] = useState<Data | undefined>(undefined);
  // const [statistic, setStatistic] = useState<Data | undefined>(undefined);
  const [data, setData] = useState<Data | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const res = await axios.get('http://vindev.cx.ua/dashboard', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImV4ZW1wbGVAbWFpbC5jb20ifSwiaWF0IjoxNjc4MDkzNTIzfQ.Z6ipWb26LZVFahDxYhYLq-MBWSW4V9l2wJaYFv4A-2o',
          },
        });

        setData(res.data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <Loader />;
  }

  const { 
    statistic,
    chartData,
    users,
    general_sales_time,
  } = data;

  const {
    iam_users,
    iam_roles,
    iam_policies,
    compute_resources,
    games,
  } = statistic;

  return (
    <>
      <UpperFramesBlock>
          <>
          <UpperFrame>
            <UpperFrameIcon1 src={frameIcon1} alt='frame icon' />

            <UpperFrameDescription>
              <Number>{iam_users}</Number>
              <Title>IAM Users</Title>
            </UpperFrameDescription>
          </UpperFrame>

          <UpperFrame>
            <UpperFrameIcon2 src={frameIcon2} alt='frame icon' />

            <UpperFrameDescription>
              <Number>{iam_roles}</Number>
              <Title>IAM Roles</Title>
            </UpperFrameDescription>
          </UpperFrame>

          <UpperFrame>
            <UpperFrameIcon3 src={frameIcon3} alt='frame icon' />

            <UpperFrameDescription>
              <Number>{iam_policies}</Number>
              <Title>IAM Policies</Title>
            </UpperFrameDescription>
          </UpperFrame>

          <UpperFrame>
            <UpperFrameIcon4 src={frameIcon4} alt='frame icon' />

            <UpperFrameDescription>
              <Number>{compute_resources}</Number>
              <Title>Compute Resources</Title>
            </UpperFrameDescription>
          </UpperFrame>

          <UpperFrame>
            <UpperFrameIcon5 src={frameIcon5} alt='frame icon' />

            <UpperFrameDescription>
              <Number>{games}</Number>
              <Title>Games</Title>
            </UpperFrameDescription>
          </UpperFrame>
        </>
      </UpperFramesBlock>
      <GameStatsBlock>
        <GameStatsHeader>
          <GameStatsHeaderTitle>Game Stats</GameStatsHeaderTitle>

          <DropdownTitle>
            <DataType>Data type</DataType>
            <DataTypeDropdown />
          </DropdownTitle>
        </GameStatsHeader>

        <GameStatsContainer>
          <GameStats />
          <DataTypeRating />
        </GameStatsContainer>
      </GameStatsBlock>
    </>
  );
};

export default Dashboard;
