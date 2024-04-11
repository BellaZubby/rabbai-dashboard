"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement} from "chart.js";
ChartJS.register(ArcElement);

type Props = {}

const ProgressPieChart = (props: Props) => {

   // doughnut data
   const data = {
    datasets: [
      {
        data: [90, 25], // Example data (adjust as needed)
        backgroundColor: ["#07CA9E", "#EAEAEA"], // Green for completed, gray for remaining
        cutout: "75%",
        borderColor: ["#FAF9F8"],
      },
    ],
  };

  // TO center text
   const doughnutLabel = {
    id:  "doughnutLabel",
    afterDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any; }, args: any, plugins: any) {
      const {ctx, data} = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      // text
      ctx.save();
      ctx.font = '20px bold sans-serif';
      ctx.fillStyle = '#07CA9E';
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle';
      ctx.fillText(`${data.datasets[0].data[0]} %`, centerX, centerY);
    }
   }
//  To resize doughnut
   const options = {
    aspectRatio: 3,
   } 
  
   return (
    <>
      <div className='flex flex-col items-center  w-[50%]'>
        <Doughnut 
          data={data}
          options={options}
          plugins={[doughnutLabel]}
        />
        <h6 className='text-[#7B7A70] text-xs mt-2'>Overall Success Rate</h6>
        <h5 className='text-[#525150] font-bold text-sm mt-1'>Mathematics</h5>

      </div>
    </>
  )
}

export default ProgressPieChart