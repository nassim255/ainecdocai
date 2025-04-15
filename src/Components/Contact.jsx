import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className="bg-black text-white py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <a
                target={"_blank"}
                href={
                  "https://www.instagram.com/ainec.club?igsh=azN5dDExb2pjdjA0"
                }
                className="flex items-center space-x-3"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span>ainec.club</span>
              </a>
              <a
                href={"https://www.facebook.com/share/18nMhHLpsp/"}
                target={"_blank"}
                className="flex items-center space-x-3"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span>ainec.club</span>
              </a>
              <a
                href={"https://www.linkedin.com/company/ainec-club/"}
                target={"_blank"}
                className="flex items-center space-x-3"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>ainec.club</span>
              </a>
            </div>
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} />
                <span>+213542220198</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>ainec.club@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-5">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-gray-400">
              <p>© 2025 DOC.AI. All rights reserved.</p>
            </div>
            <div className="flex justify-center space-x-5 mt-5 text-gray-400">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
