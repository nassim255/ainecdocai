import React, { useState } from "react";
import DOCAI from "../assets/logo-8.png";
import diagnostic from "../assets/diagnostic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import {docText} from '../assets/DOCAI-8.png'
import Registration from "./Registration";
function Hero() {
  const [modal, setModal] = useState(false);
  return (
    <div className="relative">
      <header className="relative sm:max-w-5xl mx-auto my-auto max-w-xl h-fit sm:h-screen">
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="sm:max-w-5xl mx-auto flex justify-between items-center px-4 sm:px-8 py-2">
            <div className="w-2/12 sm:w-1/12 flex justify-center items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2">
              <img className="flex-1 w-8 sm:w-auto" src={DOCAI} alt=""></img>
              <h2 className="text-lg sm:text-2xl font-bold text-primary">
                DOCAI
              </h2>
            </div>
            <div>
              <button
                onClick={() => setModal(true)}
                className="w-24 sm:w-40 px-4 sm:px-5 py-2 sm:py-3 bg-primary text-white text-xs sm:text-sm font-bold rounded-lg duration-300 hover:bg-[#22887F] transition"
              >
                Register Now
              </button>
            </div>
          </div>
        </nav>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-7 my-10 sm:my-20 px-4 sm:px-8 pt-16">
          <h1 className="capitalize text-lg sm:text-6xl font-bold text-white leading-relaxed text-center sm:text-left">
            Where Brilliant minds code the next era of <br />
            <span className="text-primary">Healthcare Innovation!</span>
          </h1>
          <img
            className="w-40 sm:w-96 h-40 sm:h-96 mx-auto"
            src={diagnostic}
            alt=""
          />
        </div>
      </header>
      {modal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setModal(false)}
              className="absolute top-4 sm:top-32 right-4 sm:right-16 text-gray-500 hover:text-black text-2xl sm:text-3xl font-bold z-10"
            >
              &times;
            </button>
            <Registration />
          </div>
        </div>
      )}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-primary text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg hover:bg-[#22887F] transition duration-300 flex items-center justify-center text-2xl sm:text-3xl font-bold"
      >
        <FontAwesomeIcon className="text-xl" icon={faArrowUp} />
      </button>
    </div>
  );
}
export default Hero;
