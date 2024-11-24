import React from "react";
import { Link } from "react-router-dom";

function HomeComp() {
  return (
    <div className="py-[16px] px-[26px] rounded-[16px]  w-full  bg-[#fff] mt-[24px] shadow-2xl">
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[#000] text-[36px] font-mono font-semibold">
          Asosiy Sahifa
        </h2>
        <ul className="flex flex-row items-center justify-between">
          <li className="flex flex-col gap-[2px] max-w-[330px] w-full bg-[#DD4755] rounded-[8px] pt-[24px]">
            <h3 className="text-[#fff] pl-[24px] font-mono text-[20px] font-semibold">
              Qabulga yozilganlar
            </h3>
            <div className="flex flex-row pl-[24px] pr-[16px] justify-between items-start">
              <span className="text-[#fff] font-mono text-[50px] font-bold ">
                25
              </span>
              <img
                className="w-[120px] ml-auto h-[120px]"
                src="./qabul.svg"
                alt=""
              />
            </div>
            <Link
              to={"/"}
              className="rounded-b-[4px] bg-[#DC3545] w-full text-center text-[14px] font-semibold text-[#fff] py-[10px]"
            >
              Ko'proq
            </Link>
          </li>
          <li className="flex flex-col gap-[2px] max-w-[330px] w-full bg-[#28A745] rounded-[8px] pt-[24px]">
            <h3 className="text-[#fff] pl-[24px] font-mono text-[20px] font-semibold">
              Bemorlar
            </h3>
            <div className="flex flex-row pl-[24px] pr-[16px] justify-between items-start">
              <span className="text-[#fff] font-mono text-[50px] font-bold ">
                25
              </span>
              <img
                className="w-[120px] ml-auto h-[120px]"
                src="./bemors.svg"
                alt=""
              />
            </div>
            <Link
              to={"bemorlar"}
              className="rounded-b-[4px] bg-[#24963E] w-full text-center text-[14px] font-semibold text-[#fff] py-[10px]"
            >
              Ko'proq
            </Link>
          </li>
          <li className="flex flex-col gap-[2px] max-w-[330px] w-full bg-[#FFC107] rounded-[8px] pt-[24px]">
            <h3 className="text-[#fff] pl-[24px] font-mono text-[20px] font-semibold">
              Maqsadli bemorlar
            </h3>
            <div className="flex flex-row pl-[24px] pr-[16px] justify-between items-start">
              <span className="text-[#fff] font-mono text-[50px] font-bold ">
                25
              </span>
              <img
                className="w-[120px] ml-auto h-[120px]"
                src="./maqsad.svg"
                alt=""
              />
            </div>
            <Link
              to={"/"}
              className="rounded-b-[4px] bg-[#E5AD06] w-full text-center text-[14px] font-semibold text-[#fff] py-[10px]"
            >
              Ko'proq
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeComp;
