import React, { Component } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Sample from "../components/assests/images/Sample.png";
import Sample1 from "../components/assests/images/Sample1.png";
import Sample2 from "../components/assests/images/Sample2.png";
import Group2 from "../components/assests/images/Group2.png";
import Group3 from "../components/assests/images/Group3.png";
import Group4 from "../components/assests/images/Group 4.png";

export class Course extends Component {
  render() {
    return (
      <div className="max-w-full justify-center flex bg-[#E7E9EB] mx-auto px-4 py-10 flex-col items-center text-[#6D737A] font-custom">
        <div className="">
          <h1 className="text-[29.39px] ml-6 font-bold">
            Most <span className="text-[#000080]">Popular Course</span>
          </h1>
          <p className="mt-4 ml-6 text-[10.66px]">
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <div className="flex space-x-4 mt-6 items-center md:space-x-6 overflow-x-auto md:overflow-x-hidden">
            <div className="rounded-full hover:bg-[#FAA43C] flex items-center justify-center bg-[#FFFFFF] h-8 w-8 md:hidden">
              <RxCaretLeft size={25} className="text-[#363A3D]" />
            </div>

            <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4">
              {[
                { img: Sample, group: Group2 },
                { img: Sample1, group: Group3 },
                { img: Sample2, group: Group4 },
                { img: Sample, group: Group4 },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] rounded-lg p-4 w-full md:w-[260px] relative flex-shrink-0 mb-4 md:mb-0"
                >
                  <div className="flex items-center">
                    <img
                      src={course.group}
                      alt="Group"
                      className="absolute mt-12 ml-2 h-6"
                    />
                  </div>
                  <img
                    src={course.img}
                    alt="Sample course"
                    className="rounded-t-lg w-full"
                  />
                  <div className="border-b p-4">
                    <h2 className="text-[10.66px] text-[#363a3d]">
                      Various versions have evolv...
                    </h2>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} className="text-[#FFA63A]" />
                      ))}
                      <span className="ml-2">(15)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 px-4">
                    <h2 className="text-[12.8px] text-[#1b1d1f]">$500</h2>
                    <div className="h-6 w-6 cursor-pointer shadow-lg rounded-full flex items-center justify-center bg-gradient-to-r bg-gray-200  hover:bg-gradient-to-r hover:from-[#FFA337] hover:to-[#FFC27A]">
                      <GoArrowUpRight size={15} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-full hover:bg-[#FAA43C] flex items-center justify-center bg-[#FFFFFF] h-8 w-8 md:hidden">
              <RxCaretRight size={25} className="text-[#363A3D]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;