import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ChartData {
  blue: number;
  red: number;
  green: number;
  date: string;
}

interface ChartDataProps {
  chartData: ChartData[];
}

// const data = [
//   {name: '01/2022', red: 730, blue: 800, green: 240},
//   {name: '02/2022', red: 600, blue: 950, green: 350},
//   {name: '03/2022', red: 730, blue: 1000, green: 280},
//   {name: '04/2022', red: 680, blue: 760, green: 340},
//   {name: '05/2022', red: 510, blue: 750, green: 400},
//   {name: '06/2022', red: 700, blue: 900, green: 340},
//   {name: '07/2022', red: 590, blue: 830, green: 250},
//   {name: '08/2022', red: 400, blue: 840, green: 270},
//   {name: '09/2022', red: 600, blue: 850, green: 290},
//   {name: '10/2022', red: 540, blue: 750, green: 250},
// ];

const GameStats: React.FC<ChartDataProps> = ({ chartData }) => {
  const chartDataUpdated = chartData.map(data => {
    const newDate = data.date.split('-').reverse().slice(1).join('/');

    return {
      ...data,
      date: newDate
    };
  });

  return (
    <AreaChart data={chartDataUpdated} width={876} height={240} stackOffset="expand">
      <CartesianGrid stroke='rgba(255, 255, 255, 0.04)' />
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
          dataKey='red'
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
          dataKey='green'
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

// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// // type Props = {
// //   name: string,
// //   red: number,
// //   blue: number,
// //   green: number,
// // };

// interface ChartData {
//   blue: number;
//   red: number;
//   green: number;
//   date: string;
// }

// interface ChartDataProps {
//   chartData: ChartData[];
// }

// // green - green, blue - blue, red - red.

// const data = [
//   {name: '01/2022', red: 730, blue: 800, green: 240},
//   {name: '02/2022', red: 600, blue: 950, green: 350},
//   {name: '03/2022', red: 730, blue: 1000, green: 280},
//   {name: '04/2022', red: 680, blue: 760, green: 340},
//   {name: '05/2022', red: 510, blue: 750, green: 400},
//   {name: '06/2022', red: 700, blue: 900, green: 340},
//   {name: '07/2022', red: 590, blue: 830, green: 250},
//   {name: '08/2022', red: 400, blue: 840, green: 270},
//   {name: '09/2022', red: 600, blue: 850, green: 290},
//   {name: '10/2022', red: 540, blue: 750, green: 250},
// ];

// const GameStats: React.FC<ChartDataProps> = ({ chartData }) => {
//   return (
//       <AreaChart data={chartData} width={876} height={240} stackOffset="expand">
//         <CartesianGrid stroke='rgba(255, 255, 255, 0.04)' />
//         <XAxis
//           dataKey='name'
//           style={{
//             fontSize: 11,
//             fontWeight: 400,
//             fontFamily: 'Metropolis',
//             color: 'rgba(255, 255, 255, 0.6)',
//           }}
//           tickMargin={16}
//           tickLine={false}
//         />
//         <YAxis
//           type="number"
//           domain={[0, 250, 500, 750, 1000]}
//           tickLine={false}
//           tickMargin={21}
//           style={{
//             fontSize: 11,
//             fontWeight: 400,
//             fontFamily: 'Metropolis',
//             color: 'rgba(255, 255, 255, 0.6)',
//           }}
//         />
//         <Tooltip />
//         <Area
//           type='monotone'
//           dataKey='blue'
//           stroke='#0F81CE'
//           strokeWidth={2}
//           fill='rgba(15, 129, 206)'
//           fillOpacity={0.2}
//           dot={{ 
//             stroke: '#18A0FB',
//             strokeWidth: 5,
//             r: 2,
//           }}
//         />
//         <Area 
//           type='monotone'
//           dataKey='red'
//           stroke='#ED2D95'
//           strokeWidth={2}
//           fill='rgba(197, 45, 129)'
//           fillOpacity={0.2}
//           dot={{
//             stroke: '#ED2D95',
//             strokeWidth: 5,
//             r: 2,
//           }}
//         />
//         <Area
//           type='monotone'
//           dataKey='green'
//           stroke='#3CDC86'
//           strokeWidth={2}
//           fill='rgba(27, 186, 100)'
//           fillOpacity={0.2}
//           dot={{
//             stroke: '#3CDC86',
//             strokeWidth: 5,
//             r: 2,
//           }}
//         />
//       </AreaChart>
//   );
// };

// export default GameStats;


// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// // type Props = {
// //   name: string,
// //   red: number,
// //   blue: number,
// //   green: number,
// // };

// const data = [
//   {name: '01/2022', red: 730, blue: 800, green: 240},
//   {name: '02/2022', red: 600, blue: 950, green: 350},
//   {name: '03/2022', red: 730, blue: 1000, green: 280},
//   {name: '04/2022', red: 680, blue: 760, green: 340},
//   {name: '05/2022', red: 510, blue: 750, green: 400},
//   {name: '06/2022', red: 700, blue: 900, green: 340},
//   {name: '07/2022', red: 590, blue: 830, green: 250},
//   {name: '08/2022', red: 400, blue: 840, green: 270},
//   {name: '09/2022', red: 600, blue: 850, green: 290},
//   {name: '10/2022', red: 540, blue: 750, green: 250},
// ];

// const GameStats = () => {
//   return (
//       <AreaChart data={data} width={828} height={212} stackOffset="expand">
//         <CartesianGrid stroke='rgba(255, 255, 255, 0.04)' />
//         <XAxis
//           dataKey='name'
//           style={{
//             fontSize: 11,
//             fontWeight: 400,
//             fontFamily: 'Metropolis',
//             color: 'rgba(255, 255, 255, 0.6)',
//           }}
//           tickMargin={16}
//           tickLine={false}
//         />
//         <YAxis
//           type="number"
//           domain={[0, 250, 500, 750, 1000]}
//           tickLine={false}
//           tickMargin={21}
//           style={{
//             fontSize: 11,
//             fontWeight: 400,
//             fontFamily: 'Metropolis',
//             color: 'rgba(255, 255, 255, 0.6)',
//           }}
//         />
//         <Tooltip />
//         <Area
//           type='monotone'
//           dataKey='blue'
//           stroke='#0F81CE'
//           strokeWidth={2}
//           fill='rgba(15, 129, 206)'
//           fillOpacity={0.2}
//           dot={{ 
//             stroke: '#18A0FB',
//             strokeWidth: 5,
//             r: 2,
//           }}
//         />
//         <Area 
//           type='monotone'
//           dataKey='red'
//           stroke='#ED2D95'
//           strokeWidth={2}
//           fill='rgba(197, 45, 129)'
//           fillOpacity={0.2}
//           dot={{
//             stroke: '#ED2D95',
//             strokeWidth: 5,
//             r: 2,
//           }}
//         />
//         <Area
//           type='monotone'
//           dataKey='green'
//           stroke='#3CDC86'
//           strokeWidth={2}
//           fill='rgba(27, 186, 100)'
//           fillOpacity={0.2}
//           dot={{
//             stroke: '#3CDC86',
//             strokeWidth: 5,
//             r: 2,
//           }}
//         />
//       </AreaChart>
//   );
// };

// export default GameStats;
