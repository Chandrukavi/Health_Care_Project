import React from 'react';
import Circle from "../assets/Card/Circle.svg"

const RecentApplies = ({ jobs }) => {
  return (
    <div className="w-fit bg-white p-4 rounded-lg shadow-md   ml-4">
      <h4 className="font-semibold mb-4">Recent Applies</h4>
      <ul>
        {jobs.map(job => (
          <div key={job.id} className="mb-2 mt-7 flex  border p-2 border-CardBackground rounded-lg gap-5">
            <div>
            <img src={Circle} alt="Circle" className="h-8 w-8" />
            </div>
            <div>
            <h5 className="text-xs">{job.hospital}</h5>
            <h5>{job.title}</h5>
            </div>
            <div>
            <h5 className="text-sm text-gray-500">{job.appliedDate}</h5>
            </div>
           
            
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecentApplies;
