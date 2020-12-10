import React from 'react';

// export const Countries = () => {
//     return (
//         <div>
//             <h1>Choose a country</h1>
//             <p>List of coutries</p>
//             <ul>
//                 <li>Australia</li>
//                 <li>Belgium</li>
//                 <li>Canada</li>
//                 <li>Denmark</li>
//                 <li>Australia</li>
//                 <li>Belgium</li>
//                 <li>Canada</li>
//                 <li>Denmark</li>
//                 <li>Australia</li>
//                 <li>Belgium</li>
//                 <li>Canada</li>
//                 <li>Denmark</li>
//                 <li>Australia</li>
//                 <li>Belgium</li>
//                 <li>Canada</li>
//                 <li>Denmark</li>
//                 <li>Australia</li>
//                 <li>Belgium</li>
//                 <li>Canada</li>
//                 <li>Denmark</li>

//             </ul>
//         </div>
//     )
// }

import {Line} from 'react-chartjs-2';

const state = {
  labels: ['1', '2', '3',
           '4', '5', '6', '7'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [1129, 1468, 1586, 1605, 1603, 2115, 1745]
    }
  ]
}

export const Countries = () => {
      return (
          <div className='col-sm'>
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
            }}
          />
          </div>
      );
  }