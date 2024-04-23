import CardContainer from "@/components/ui/CardContainer";
import React from "react";
import {
  detailsType,
  headerType,
} from "../shared/types";
type Props = {};


const Header: Array<headerType> = [
  {
    header: "Subject"
  },
  {
    header: "Topic"
  },
  {
    header: "Past Question"
  },
  {
    header: "Success Rate"
  },
]

const Details: Array<detailsType> = [
  {
    subject: 'Mathematics',
    topic: 5,
    pastQuestion: 5,
    successRate: 5
  },
  {
    subject: 'English',
    topic: 10,
    pastQuestion: 10,
    successRate: 10
  },
  {
    subject: 'Physics',
    topic: 8,
    pastQuestion: 8,
    successRate: 8
  },
  {
    subject: 'Chemistry',
    topic: 9,
    pastQuestion: 9,
    successRate: 9
  },
]


const SubjectSummary = (props: Props) => {
  return (
    <div className="w-[40%]">
      <CardContainer className="border-none pt-0 px-0 bg-[#FDFDFC] h-64">
        <h4 className="w-full bg-[#07CA9E] text-[#FAF9F8] rounded-tl-md rounded-tr-md py-5 text-sm font-bold pl-4">
          Subject Summary
        </h4>

        <table className='table mb-12'>
            <thead>
            <tr className='text-[#444444] text-xs font-bold'>
              {
                Header.map((d, i) => (
                  <th key={i} className='px-3 pt-3'>{d.header}</th>
                 
                ))
              }
              </tr>
            </thead>
            <tbody className='text-xs'>

              {
                Details.map((d, i) => (
                  <tr key={i}>
                      <td className='pl-7 py-3'>
                      {d.subject}
                    </td>

                  
                  <td className='text-center py-3'>{d.topic}</td>
                  <td className='text-center py-3'>{d.pastQuestion}</td>
                  <td className='text-center py-3'>{d.successRate}</td>
                </tr>
                ))
              }
               
                </tbody>
                </table>
      </CardContainer>
    </div>
  );
};

export default SubjectSummary;
