import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="h-[100vh] bg-white" id="price">
      <div className="container mx-auto ">
        <div>
          <h1 className="text-3xl font-bold text-center text-orange-400 pt-12">
            Pricing
          </h1>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4  justify-items-center gap-10 lg:gap-0 xl:px-[120px] 2xl:px-[240px]">
            {/* -----------------------------------------1st--------------------------------------------------- */}
          <div className="relative flex flex-col w-[250px] items-center bg-white p-4 rounded-lg shadow-[#a1bdb8] shadow-md py-10">
            <div>
              <h2 className="font-bold text-2xl text-center mb-2 pb-4 border-b border-b-orange-200">
                Standard
              </h2>
              <p className="text-sm text-center">
                For individuals or very small teams just getting started
              </p>
              <div className="flex flex-col items-center my-8">
                <p className="font-bold text-4xl">$0.15</p>
                <p className="text-sm ">/image</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pb-10">
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Up to Images/Order
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Background removal (AI) Option
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Adjustments by Professionals
                </p>
              </div>

              <div className="flex justify-center mt-8 absolute bottom-[-20px] left-[43px]">
                <Link className=" px-12 py-2 bg-[#0F6C5F] text-white font-semibold shadow-gray-200 shadow-md border-gray-100 border-2 rounded-3xl">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          {/* --------------------------------------------2nd---------------------------------------------------- */}
          <div className="relative flex flex-col w-[250px] items-center bg-white p-4 rounded-lg shadow-[#a1bdb8] shadow-md py-10">
            <div>
              <h2 className="font-bold text-2xl text-center mb-2 pb-4 border-b border-b-orange-200">
                Standard
              </h2>
              <p className="text-sm text-center">
                For individuals or very small teams just getting started
              </p>
              <div className="flex flex-col items-center my-8">
                <p className="font-bold text-4xl">$0.15</p>
                <p className="text-sm ">/image</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pb-10">
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Up to Images/Order
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Background removal (AI) Option
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Adjustments by Professionals
                </p>
              </div>

              <div className="flex justify-center mt-8 absolute bottom-[-20px] left-[43px]">
                <Link className=" px-12 py-2 bg-[#0F6C5F] text-white font-semibold shadow-gray-200 shadow-md border-gray-100 border-2 rounded-3xl">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          {/* --------------------------------------------3rd---------------------------------------------------- */}
          <div className="relative flex flex-col w-[250px] items-center bg-white p-4 rounded-lg shadow-[#a1bdb8] shadow-md py-10">
            <div>
              <h2 className="font-bold text-2xl text-center mb-2 pb-4 border-b border-b-orange-200">
                Standard
              </h2>
              <p className="text-sm text-center">
                For individuals or very small teams just getting started
              </p>
              <div className="flex flex-col items-center my-8">
                <p className="font-bold text-4xl">$0.15</p>
                <p className="text-sm ">/image</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pb-10">
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Up to Images/Order
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Background removal (AI) Option
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Adjustments by Professionals
                </p>
              </div>

              <div className="flex justify-center mt-8 absolute bottom-[-20px] left-[43px]">
                <Link className=" px-12 py-2 bg-[#0F6C5F] text-white font-semibold shadow-gray-200 shadow-md border-gray-100 border-2 rounded-3xl">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          {/* --------------------------------------------4th---------------------------------------------------- */}
          <div className="relative flex flex-col w-[250px] items-center bg-white p-4 rounded-lg shadow-[#a1bdb8]   shadow-md py-10">
            <div>
              <h2 className="font-bold text-2xl text-center mb-2 pb-4 border-b border-b-orange-200">
                Standard
              </h2>
              <p className="text-sm text-center">
                For individuals or very small teams just getting started
              </p>
              <div className="flex flex-col items-center my-8">
                <p className="font-bold text-4xl">$0.15</p>
                <p className="text-sm ">/image</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pb-10">
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Up to Images/Order
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Background removal (AI) Option
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <IoMdCheckmarkCircleOutline className="text-orange-400" />
                <p className="border-b border-b-[#0F6C5F]">
                  Adjustments by Professionals
                </p>
              </div>

              <div className="flex justify-center mt-8 absolute bottom-[-20px] left-[43px]">
                <Link className=" px-12 py-2 bg-[#0F6C5F] text-white font-semibold shadow-gray-200 shadow-md border-gray-100 border-2 rounded-3xl">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
