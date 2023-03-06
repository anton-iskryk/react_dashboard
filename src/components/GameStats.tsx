import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// type Props = {
//   name: string,
//   uv: number,
//   pv: number,
//   amt: number,
// };

const data = [
  {name: '01/2022', uv: 730, pv: 800, amt: 240},
  {name: '02/2022', uv: 600, pv: 950, amt: 350},
  {name: '03/2022', uv: 730, pv: 1000, amt: 280},
  {name: '04/2022', uv: 680, pv: 760, amt: 340},
  {name: '05/2022', uv: 510, pv: 750, amt: 400},
  {name: '06/2022', uv: 700, pv: 900, amt: 340},
  {name: '07/2022', uv: 590, pv: 830, amt: 250},
  {name: '08/2022', uv: 400, pv: 840, amt: 270},
  {name: '09/2022', uv: 600, pv: 850, amt: 290},
  {name: '10/2022', uv: 540, pv: 750, amt: 250},
];

const GameStats = () => {
  return (
      <AreaChart data={data} width={828} height={212} stackOffset="expand">
        <CartesianGrid stroke='rgba(255, 255, 255, 0.04)' />
        <XAxis
          dataKey='name'
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
          domain={[0, 250, 500, 750, 1000]}
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
          dataKey='pv'
          stroke='#0F81CE'
          strokeWidth={2}
          fill='rgba(15, 129, 206)'
          fillOpacity={0.2}
          dot={{ 
            stroke: '#18A0FB',
            strokeWidth: 5,
            r: 2,
          }}
        />
        <Area 
          type='monotone'
          dataKey='uv'
          stroke='#ED2D95'
          strokeWidth={2}
          fill='rgba(197, 45, 129)'
          fillOpacity={0.2}
          dot={{
            stroke: '#ED2D95',
            strokeWidth: 5,
            r: 2,
          }}
        />
        <Area
          type='monotone'
          dataKey='amt'
          stroke='#3CDC86'
          strokeWidth={2}
          fill='rgba(27, 186, 100)'
          fillOpacity={0.2}
          dot={{
            stroke: '#3CDC86',
            strokeWidth: 5,
            r: 2,
          }}
        />
      </AreaChart>
  );
};

export default GameStats;
