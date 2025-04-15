import React from "react";
import LalaJmila from '../assets/lalajmila.png'
import Stepcode from '../assets/stepcode.png'
import Hsam from '../assets/hsam.png'
function Sponsors() {
  return (
    <div>
      <div className="mx-auto my-28 max-w-5xl">
        <div className="w-full mx-auto px-8 py-9 rounded-2xl opacity-90">
          <h2 className="capitalize font-bold text-4xl sm:text-6xl text-white text-center">
            our sponsors
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-7 my-20 px-8 py-5 flex-wrap">
            <div className="w-full sm:w-1/4 h-auto rounded-2xl flex items-center justify-center bg-white">
              <img className="w-full h-full object-contain rounded-2xl max-h-40" src={LalaJmila} alt="Lala Jmila" />
            </div>
            <div className="w-full sm:w-1/4 h-auto rounded-2xl flex items-center justify-center bg-white">
              <img className="w-full h-full object-contain rounded-2xl max-h-40" src={Hsam} alt="Hsam" />
            </div>
            <div className="w-full sm:w-1/4 h-auto rounded-2xl flex items-center justify-center bg-white">
              <img className="w-full h-full object-contain rounded-2xl max-h-40" src={Stepcode} alt="Stepcode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
