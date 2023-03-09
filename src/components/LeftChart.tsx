import React from 'react';
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ChartData {
  blue: number;
  red: number;
  green: number;
  date: string;
}

interface ChartDataProps {
  chartData: ChartData[];
}

const GameStats: React.FC<ChartDataProps> = ({ chartData }) => {
  const chartDataUpdated = chartData.map(data => {
    const newDate = data.date.split('-').reverse().slice(1).join('/');

    return {
      ...data,
      date: newDate
    };
  });

  return (
    <ResponsiveContainer width={876} height={232}>
      <AreaChart data={chartDataUpdated} stackOffset='expand' margin={{ left: -20 }}>
        <CartesianGrid stroke='rgba(255, 255, 255, 0.04)' />
        <defs>
          <linearGradient id="blueGr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="80%" stopColor="rgb(15, 129, 206)" stopOpacity={0.2}/>
            <stop offset="100%" stopColor="rgb(15, 129, 206)" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="redGr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="80%" stopColor="rgb(197, 45, 129)" stopOpacity={0.2}/>
            <stop offset="100%" stopColor="rgb(197, 45, 129)" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="greenGr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="80%" stopColor="rgb(27, 186, 100)" stopOpacity={0.2}/>
            <stop offset="100%" stopColor="rgb(27, 186, 100)" stopOpacity={0}/>
          </linearGradient>
        </defs>

        <XAxis
            dataKey='date'
            style={{
              fontSize: 11,
              fontWeight: 400,
              fontFamily: 'Metropolis',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
            tickMargin={16}
            tickLine={false}
          />
        <YAxis
            type="number"
            tickLine={false}
            tickMargin={21}
            style={{
              fontSize: 11,
              fontWeight: 400,
              fontFamily: 'Metropolis',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          />
        <Tooltip />
          <Area
            type='monotone'
            dataKey='blue'
            stroke='#0F81CE'
            strokeWidth={2}
            fill='url(#blueGr)'
            fillOpacity={1}
            dot={{ 
              stroke: '#18A0FB',
              strokeWidth: 5,
              r: 2,
            }}
            isAnimationActive={false}
          />
          <Area 
            type='monotone'
            dataKey='red'
            stroke='#ED2D95'
            strokeWidth={2}
            fill='url(#redGr)'
            fillOpacity={1}
            dot={{
              stroke: '#ED2D95',
              strokeWidth: 5,
              r: 2,
            }}
            isAnimationActive={false}
          />
          <Area
            type='monotone'
            dataKey='green'
            stroke='#1BBA64'
            strokeWidth={2}
            fill='url(#greenGr)'
            fillOpacity={1}
            dot={{
              stroke: '#1BBA64',
              strokeWidth: 5,
              r: 2,
            }}
            isAnimationActive={false}
          />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GameStats;
