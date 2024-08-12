import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import UserProfile from './components/UserProfile';
import HomeNav from './NavBar/HomeNav';
import RecommendationsPage from './components/RecommendationsPage';
import JobNav from "./NavBar/JobsNav";
import FilterPage from "./Componets_Filter/FilterJob"
import SlideFliter from "./Componets_Filter/SlideFliter"
import Requirement from "./Componets_Filter/Requirement";

// Screen-2

import FilterSidebar from './Componets_Jobs/FilterSidebar';
import JobsSection from './Componets_Jobs/JobsSection';
import RecentApplies from './Componets_Jobs/RecentApplies';
import Hospital from "./Componets_Jobs/Hospital"
import { jobsData } from '../src/Data/jobsData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
       
        <Routes>
          {/* Route for the MainPage (which includes UserProfile, MainPage, and RecommendationsPage) */}
          <Route
            path="/"
            element={
             
              
              <div >
                <HomeNav />
                <div className="flex bg-Background pt-4 px-4">
                <UserProfile />
                <MainPage />
                <RecommendationsPage />
                </div>
              </div>
            }
          />
          
          {/* Route for the Jobs Page */}
          <Route
            path="/jobs"
            element={
              <>
             <JobNav />
                <div className="flex  bg-Background pt-4 px-4">
                  <FilterSidebar />
                  <main className="w-4/5 p-4">
                    <JobsSection title="Latest Job Openings" jobs={jobsData.latestJobOpenings} />
                    <div className='flex'>
                    <div>
                    <JobsSection title="Jobs based on your profile" jobs={jobsData.profileBasedJobs} />
                    <Hospital title="Jobs from top Hospitals" />
                    </div>
                    <div>
                    <RecentApplies jobs={jobsData.recentApplies} />
                    </div>
                    </div>

                  </main>
                 
                </div>
              </>
            }
          />


          <Route path="/new-page" element={
            <>
             <JobNav />
            
            
                    
                  
                   <main className="w-5/5 p-4 flex bg-Background">
                   <SlideFliter />
                   <FilterPage />
                   <Requirement />

                  </main> 
                 
                
                 </>
           }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
