import React from "react";
import model from "/images/B1.jpg";
import model2 from "/images/B2.png";

import ReactCompareImage from "react-compare-image";
import "./style.css";
import { Link } from "react-router-dom";


const HowToUse = () => {
  return (
    <>
      <div id="use" className=" w-full ">
        <div className="container mx-auto relative overflow-hidden">
          <div className="lg:flex  gap-2 lg:pl-16  ">
            <div className=" pt-44 sm:pt-24 md:pt-28 px-5 lg:px-0 lg:pl-4 sm:pl-16 md:pl-28 text-start xl:ml-28 lg:w-[600px] ">
            <div className="w-full relative">
            <h2 className=" text-3xl md:text-4xl text-center lg:text-left text-black font-bold">
                Want to Take Your
              </h2>
              <h2 className=" text-3xl md:text-4xl text-black text-center lg:text-left  font-bold">
                Product Images to
              </h2>
              <h2 className="text-3xl md:text-4xl text-black text-center lg:text-left font-bold">
                the Next Level?
              </h2>
              <div className="absolute left-0 top-[-20px] sm:left-[70px] lg:top-[-40px] lg:left-[-70px] opacity-50">
                <img className="w-28 sm:w-36" src="/images/Round.svg"/>
              </div>
            </div>

              <p className="text-sm text-center lg:text-left mt-5 mb-4 ">
                If you have a store in Shopify, our retouching service will help
                you create flawless product photos that will boost your
                conversion rates. Head over to the Shopify App store today & see
                the retouched.ai difference for yourself!
              </p>

              <div className="w-full flex justify-center lg:justify-start relative">
                {" "}
                <Link
                  onClick={() =>
                    document.getElementById("singleImagePick").click()
                  }
                  className="px-5  py-2 font-bold text-white bg-gradient-to-r from-orange-300  to-purple-600 border-gray-100 border-2 shadow-md rounded-3xl mt-6"
                >
                  Try it for Free
                </Link>
                <div className="absolute top-0 right-10 sm:right-20 ">
                  <img className="w-12" src="/public/images/indicate.svg"/>
                </div>
              </div>
              
            </div>

            <div className=" h-full relative z-50 mt-5 lg:mt-0 bg-white md:w-[450px] sm:w-[450px] lg:w-full sm:ml-20 md:ml-28  ">
              <div className="h-full overflow-hidden reactCompareImg">
                <ReactCompareImage leftImage={model} rightImage={model2} />
              </div>
            </div>
          </div>
          {/* <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div > */}
        </div>
      </div>
    </>
  );
};

export default HowToUse;
