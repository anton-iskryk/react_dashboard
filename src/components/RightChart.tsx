import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Label } from 'recharts';

const data = [
  { name: 'Roles', value: 1 },
  { name: 'Users', value: 2 },
  { name: 'Policies', value: 3 },
];
const colors = ['#18A0FB', '#3CDC86', '#ED2D95'];

const renderColorfulLegendText = (value: string, entry: any) => {
  return (
    <span style={{ color: '#596579', fontWeight: 500, padding: '10px' }}>
      {value}
    </span>
  );
};

interface CustomLabelProps {
  title: string;
  percent: string;
  desc: string;
  days: string;
}

const RightChart: React.FC = () => {
  const CustomLabel = ({ title, percent, desc, days }: CustomLabelProps) => {
    return (
      <g>
        <text
          x='50%'
          y='25%'
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill='#A7A9AD'
          fontSize="12"
          fontWeight="500"
          fontFamily='Metropolis'
        >
          {title}
        </text>
        <text
          x='50%'
          y='45%'
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill="#fff"
          fontSize="64"
          fontWeight="500"
          fontFamily='Metropolis'
        >
          {percent}
        </text>
        <text
          x='50%'
          y='65%'
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="400"
          fontFamily='Metropolis'
        >
          {desc}
        </text>
        <text
          x='50%'
          y='72%'
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="400"
          fontFamily='Metropolis'
        >
          {days}
        </text>
      </g>
    );
  };

  return (
    <PieChart width={232} height={232}>
      <Pie
        stroke='none'
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={90}
        outerRadius={110}
        fill="#8884d8"
        paddingAngle={5}
        cornerRadius={40}
        startAngle={-290}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}

        <Label
          content={
            <CustomLabel
              title="EXCESSIVE"
              percent='85%'
              desc='+40 418 in the last'
              days='30 days'
            />
          }
          position="center"
        />
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default RightChart;
