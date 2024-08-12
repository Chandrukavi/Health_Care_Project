import React from 'react';
import Circle from "../assets/Card/Circle.svg"
import Arrow from "../assets/Card/Arow.svg"

const JobCard = ({ job }) => {
  return (
    <div className="bg-white w-4/6 shadow-lg rounded-xl  relative border border-ButtonColorPlus">
      
      <div className=' p-4 flex justify-between items-center mb-4'>
        <div>
          <h4 className="text-SecondText font-medium text-sm">{job.hospital}</h4>
          <p className="text-xl font-semibold text-SecondText ">{job.title}</p>
        </div>
        <div>
          <img src={Circle} alt="Circle" className="h-10 w-10" />
        </div>
      </div>
      <ul className="flex gap-4 px-4 text-sm text-SecondText  mb-4">
        <li>• {job.type}</li>
        <li>• {job.location}</li>
      </ul>
      <div className="flex justify-between items-center bg-ButtonColorPlus h-14 px-4 py-2 rounded-b-xl">
        <p className="text-xs">{job.experience}</p>
        <img src={Arrow} alt="Arrow" className="h-6 w-auto" />
      </div>
    </div>
  );
};

export default JobCard;
