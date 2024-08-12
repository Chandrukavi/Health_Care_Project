import React from 'react';
import Circle from "../assets/Card/Circle.svg";
import Arrow from "../assets/Card/Arow.svg";

const Hospital = ({ title }) => {
    const Hospitals = [
        { title: 'Optometrist' },
        { title: 'Psychiatrist' },
        { title: 'Nurse Practitioner' },
    ];

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="flex gap-4">
                {Hospitals.map((hospital, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl border border-ButtonColorPlus w-2/5">
                        <div className="flex items-center mb-4 p-4">
                            <img src={Circle} alt="Circle" className="h-10 w-10 mr-4" />
                            <h4 className="text-customGray font-medium text-sm">{hospital.title}</h4>
                        </div>
                        <div className="flex justify-between items-center bg-ButtonColorPlus h-14 px-4 py-2 rounded-b-xl">
                            <p className="text-teal-600 font-medium">View Details</p>
                            <img src={Arrow} alt="Arrow" className="h-6 w-auto" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hospital;
