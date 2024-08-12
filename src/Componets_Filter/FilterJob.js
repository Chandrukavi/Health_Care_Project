import React from 'react';
import Circle from "../assets/Card/Circle.svg";
import Arrow from "../assets/Card/Arow.svg";
import { filterJobs } from '../Data/filterData'; 
import ArrowRight from "../assets/Requirement/arrow-right.svg"

const FilterPage = () => {
  return (
    <div className="flex pt-4 px-4 w-4/6">
      <main className="p-4 grid grid-cols-2 gap-4">
        {filterJobs.map(job => (
          <div key={job.id} className="bg-white shadow-lg rounded-xl relative border border-ButtonColorPlus">
            <div className="flex justify-between items-center p-4 mb-4">
              <div>
                <h4 className="text-customGray font-medium text-sm">{job.hospital}</h4>
                <p className="text-2xl font-semibold text-gray-800">{job.title}</p>
              </div>
              <img src={Circle} alt="Circle" className="h-10 w-10" />
            </div>
            <ul className="flex gap-4  text-sm text-SecondText mb-4 p-4">
              <li className='text-SecondText'>• {job.type}</li>
              <li className='text-SecondText'>• {job.location}</li>
            </ul>
            <div
              className={`flex justify-between items-center h-14 px-4 py-2 rounded-b-xl ${job.id === "1" ? 'bg-ButtonColor' : 'bg-ButtonColorPlus'}`}
              style={job.id === "1" ? { backgroundColor: '#FFB2C5' } : {}}
            >
               <p className="text-teal-600 font-medium">{job.experience}</p>
              <img 
                src={job.id === "1" ? ArrowRight : Arrow} 
                alt={job.id === "1" ? "ArrowRight" : "Arrow"} 
                className="h-6 w-auto" 
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FilterPage;