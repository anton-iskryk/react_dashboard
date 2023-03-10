import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Loader from '../components/Loader';
import UpperFramesBlock from '../components/UpperFramesBlock';
import GameStatsLeftBlock from '../components/GameStatsLeftBlock';
import GameStatsRightBlock from '../components/GameStatsRightBlock';
import GeneralSales from '../components/GeneralSales';

import {
  Data,
  Statistic,
  Users,
  ChartData,
  TableData,
} from '../interfaces/interfaces';

const GameStatsBlocks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-grow: 1;
`;

const Dashboard = () => {
  const [data, setData] = useState<Data | null>(null);
  const [statistic, setStatistic] = useState<Statistic | null>(null);
  const [users, setUsers] = useState<Users[] | undefined>(undefined);
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [tableData, setTableData] = useState<TableData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://vindev.cx.ua/dashboard/', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImV4ZW1wbGVAbWFpbC5jb20ifSwiaWF0IjoxNjc4MDkzNTIzfQ.Z6ipWb26LZVFahDxYhYLq-MBWSW4V9l2wJaYFv4A-2o',
          },
        });
        setData(res.data);
        setStatistic(res.data.statistic);
        setUsers(res.data.users);
        setChartData(res.data.chartData);
        setTableData(res.data.general_sales_time);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!data
      || !statistic
      || !users
      || !chartData
      || !tableData
    ) {
    return <Loader />;
  }

  return (
    <>
      <UpperFramesBlock statistic={statistic} />

      <GameStatsBlocks>
        <GameStatsLeftBlock chartData={chartData} users={users} />
        <GameStatsRightBlock />
      </GameStatsBlocks>

      <GeneralSales tableData={tableData} />
    </>
  );
};

export default Dashboard;
