import React from 'react';
import JobCard from './JobCard';

const JobsSection = ({ title, jobs }) => {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex gap-4">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobsSection;
