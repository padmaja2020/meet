// import React, {useEffect, useState} from 'react';
// import {
//     PieChart, Pie, Cell, Tooltip,ResponsiveContainer
//   } from 'recharts';

  



//   const EventGenre = ({events})=> {
     
//    getData =()=> {
//         const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        
//         const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
//                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
//         const { events } = this.props;
//         const newdata = genres.map((genre)=>{
//             const value = events.filter((event)=>{
//                 const summary = event.summary
//                 summary = summary.split(' ').filter(genre)
//             }).length
        
//             return {name: genre, value};
//         })

//         return data;
//      }

// // const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
// //                   {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

//      return(
//         <ResponsiveContainer height = {400}>
//         <PieChart width={400} height={400}>
//         <Pie
//           data={this.getData()}
//           cx={200}
//           cy={200}
//           labelLine={false}
//           label={({name, percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//         >
         
//         </Pie>
//       </PieChart>
//       </ResponsiveContainer>

//      )

//  }


// export default EventGenre;