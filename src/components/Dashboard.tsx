/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Loader from '../components/Loader';
import UpperFramesBlock from '../components/UpperFramesBlock';
import GameStatsRightBlock from '../components/GameStatsRightBlock';
import GameStatsLeftBlock from '../components/GameStatsLeftBlock';



interface Statistic {
  iam_users: number;
  iam_roles: number;
  iam_policies: number;
  compute_resources: number;
  games: number;
}

interface Users {
  name: string;
  date: string;
}

interface ChartData {
  blue: number;
  red: number;
  green: number;
  date: string;
}

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
  const [statistic, setStatistic] = useState<Statistic | undefined>(undefined);
  const [users, setUsers] = useState<Users[] | undefined>(undefined);
  const [chartData, setChartData] = useState<ChartData[] | undefined>(undefined);
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://vindev.cx.ua/dashboard', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImV4ZW1wbGVAbWFpbC5jb20ifSwiaWF0IjoxNjc4MDkzNTIzfQ.Z6ipWb26LZVFahDxYhYLq-MBWSW4V9l2wJaYFv4A-2o',
          },
        });
        setData(res.data);
        setStatistic(res.data.statistic);
        setUsers(res.data.users);
        setChartData(res.data.chartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!data || !statistic || !users || !chartData) {
    return <Loader />;
  }

  return (
    <>
      <UpperFramesBlock statistic={statistic} />

      <GameStatsLeftBlock chartData={chartData} users={users} />
      <GameStatsRightBlock />
    </>
  );
};

export default Dashboard;
