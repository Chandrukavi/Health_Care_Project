import React from 'react';
import Image1 from "../assets/Job_Picked/Image1_Job.svg";
import Image2 from "../assets/Job_Picked/image2.svg";
import Image3 from "../assets/Job_Picked/image 3.svg";
import CheckBox from "../assets/CheckBox.svg";

const RecommendationsPage = () => {
  const jobs = [
    {
      icon: Image1,
      title: 'Optometrist',
      hospital: 'Universe Multispeciality Hospital',
    },
    {
      icon: Image2,
      title: 'Psychiatrist',
      hospital: 'Medicare Hospital',
    },
    {
      icon: Image3,
      title: 'Nurse Practitioner',
      hospital: 'ABZ Multispeciality Hospital',
    },
  ];

  const courses = [
    {
      title: 'Certified Nursing Assistant (CNA)',
      platform: 'Courser',
    },
    {
      title: 'Medical Coding and Billing',
      platform: 'Udemy',
    },
    {
      title: 'Mental Health First Aid',
      platform: 'Khan Academy',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex ">
      <div className="max-w-xl w-full">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Job Picked for you</h2>
          <ul>
            {jobs.map((job, index) => (
              <li key={index} className="flex items-center mb-4">
                <img src={job.icon} alt={job.title} className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-medium text-sm">{job.title}</h3>
                  <p className="text-gray-600 text-xs">{job.hospital}</p>
                </div>
              </li>
            ))}
          </ul>
          <h5 className="text-LinkText mt-4 flex items-center">
            View more jobs <span className="ml-2">→</span>
          </h5>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recommended Courses</h2>
          <ul>
            {courses.map((course, index) => (
              <li key={index} className="flex items-center mb-4">
                <img src={CheckBox} alt={"CheckBox"} className="w-6 h-6 mr-4" />
                <div>
                  <h5 className="font-medium text-sm">{course.title}</h5>
                  <p className="text-xs">{course.platform}</p>
                </div>
              </li>
            ))}
          </ul>
          <h5 className="text-LinkText mt-4 flex items-center text-sm">
            View recommended courses <span className="ml-2">→</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
