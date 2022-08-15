import React from 'react'
import AppStore from "../../assets/appStore.svg"
import PlayStore from "../../assets/playStore.png"
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png"

const footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer arai-label="main footer" className="bg-slate-900 text-white relative">
      <div className="container px-5 pt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-10 lg:mb-0">
            <h3>Important Links</h3>
            <ul className="text-gray-200 pl-2 mt-2">
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
            </ul>
          </div>
          <div className="mb-10 lg:mb-0">
            <h3>Browse popular topics</h3>
            <ul className="text-gray-200 pl-2 mt-2">
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
            </ul>
          </div>
          <div className="mb-10 lg:mb-0">
            <h3>Popular courses and articles</h3>
            <ul className="text-gray-200 pl-2 mt-2">
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <img
              src={AppStore}
              alt="donwload the app from app store"
              className="mb-5"
            />
            <img
              src={PlayStore}
              alt="donwload the app from play store"
              className="max-w-[135px] mb-5"
            />
            <p>get the app and donwload it from google store and app store.</p>
          </div>
        </div>
        <div className="border-t mt-20 py-16 flex md:justify-between items-center flex-wrap justify-center">
          <span> &#169; {year} Coursera Inc. All rights reserved.</span>
          <div className="flex gap-8 adjust-colors md:m-0 mt-4">
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer