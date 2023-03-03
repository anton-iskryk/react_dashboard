import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 16px;
`;

const data = [
  {name: 'Jan', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Feb', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Mar', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Apr', uv: 2780, pv: 3908, amt: 2000},
  {name: 'May', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Jun', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Jul', uv: 3490, pv: 4300, amt: 2100},
];

const GameStats = () => {
  return (
    <ChartContainer>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#0F81CE" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#ED2D95" />
        <Line type="monotone" dataKey="amt" stroke="#3CDC86" />
      </LineChart>
    </ChartContainer>
  );
}

export default GameStats;
