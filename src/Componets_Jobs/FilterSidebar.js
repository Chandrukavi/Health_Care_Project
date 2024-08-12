// src/components/FilterSidebar.js
import React from 'react';
import Filter from "../assets/Filter_Side/Funnel.svg"
import Plus from "../assets/Filter_Side/Plus.svg";
import Clipboard from "../assets/Filter_Side/Clipboard List.svg";
import Bookmark from "../assets/Bookmark.svg";

const FilterSidebar = () => {
  return (
    <aside className="w-1/6 h-80 bg-white p-4 rounded-lg shadow-md mb-6">
    <div className='flex items-center justify-between mb-4'>
      <div className='flex items-center gap-2 p-2 rounded-2xl bg-FilterBackground'>
        <img src={Filter} alt="Filter" className="h-5 w-5" />
        <h3 className="text-White">Filters</h3>
      </div>
      <div className='flex items-center gap-3'>
        <img src={Bookmark} alt="Bookmark" className="h-6 w-6" />
        <img src={Clipboard} alt="Clipboard" className="h-6 w-6" />
      </div>
    </div>

    <section className="flex flex-col gap-y-6 mt-6">
      {/* Experience Section */}
      <div className='flex flex-col'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='text-base text-SecondText font-semibold'>Experience</h3> 
          <img src={Plus} alt="Plus" className="h-7 w-7 p-1 border border-Btn_Bg rounded-full 
          bg-Btn_Bg cursor-pointer" />
        </div>
        
      
      </div>

      {/* Degree Section */}
      <div className='flex items-center justify-between'>
      <h3 className='text-base text-SecondText font-semibold'>Degree</h3> 
        <img src={Plus} alt="Plus" className="h-7 w-7 p-1 border border-Btn_Bg rounded-full 
          bg-Btn_Bg cursor-pointer" />
      </div>

      {/* Work Type Section */}
      <div className='flex items-center justify-between'>
      <h3 className='text-base text-SecondText font-semibold'>Work Type</h3> 
        <img src={Plus} alt="Plus" className="h-7 w-7 p-1 border border-Btn_Bg rounded-full 
          bg-Btn_Bg cursor-pointer" />
      </div>

      {/* Location Section */}
      <div className='flex items-center justify-between'>
      <h3 className='text-base text-SecondText font-semibold'>Location</h3> 
        <img src={Plus} alt="Plus" className="h-7 w-7 p-1 border border-Btn_Bg rounded-full 
          bg-Btn_Bg cursor-pointer" />
      </div>
    </section>
  </aside>
  );
};

export default FilterSidebar;



   


