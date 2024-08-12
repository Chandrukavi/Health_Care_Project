import React from 'react';
import Require from "../assets/Requirement/Require_Img.svg";
import Share from "../assets/Requirement/ShareFat.svg"
import Bookmark from "../assets/Bookmark.svg";
import Arrow from "../assets/Requirement/arrow-right-tiny.svg"
import ArrowRight from "../assets/Requirement/arrow-right.svg"

const Requirement = () => {
  return (
    <div className="w-3/5">
    <div className="flex gap-4 w-4/4 mb-4 p-4 bg-white shadow-lg rounded-xl">
        <div>
        <img src={Require} alt="Require" className="h-16 w-16" />
        </div>
      <div>
        <h4 className="text-SecondText font-medium text-sm">RTYU Hospital</h4>
        <p className="text-xl text-SecondText font-semibold text-gray-800">Physician</p>
      </div>
      <div>
      <div className='flex ml-24 justify-end gap-2'>
    <img src={Share} alt="Share" className="h-5 w-5" />
    <img src={Bookmark} alt="Bookmark" className="h-5 w-5" />
    </div>
    <div className='ml-32'>
    <p className="text-LinkText mt-4  text-sm flex items-center">
            Learn more
            <span>
              <img src={Arrow} alt="Arrow" className="h-10 w-10" />
            </span>
          </p>
    </div>
      </div>
    </div>

<div className=" mb-4 p-4 bg-white shadow-lg rounded-xl">
    <div className="mb-4">
      <h5 className="text-xl text-SecondText font-semibold mb-2">Requirements</h5>
      <ul className="text-SecondText">
        <li>• Medical Degree (MD or DO): Completion of an accredited medical school program.</li>
        <li>• Residency Training: Successful completion of a residency program in a chosen specialty.</li>
        <li>• Board Certification: Certification by an appropriate medical board in the physician’s specialty.</li>
        <li>• State Medical License: Valid medical license to practice in the respective state.</li>
        <li>• State Medical License: Valid medical license to practice in the respective state.</li>
        <li>• State Medical License: Valid medical license to practice in the respective state.</li>
      </ul>
    </div>
    <div className="mb-4">
      <h5 className="text-xl  text-SecondText font-semibold mb-2">Benefits</h5>
      <ul className="text-SecondText">
        <li>•Competitive salary and benefits package.</li>
        <li>•Opportunities for professional development and growth</li>
        <li>•Supportive and collaborative work environment.</li>
      </ul>
    </div>
    <div>
    <div className="bg-ButtonColor font-semibold flex w-fit py-2 px-4 gap-2 border-2 border-ButtonColor rounded-lg hover:bg-ButtonColor">
      Apply <span>
              <img src={ArrowRight} alt="Arrow" className="h-5 w-5 mt-1" />
            </span>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Requirement
