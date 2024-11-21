import React from "react";

function Navbar({ setName }) {
  return (
    <div className=" max-container w-full mt-[10px] shadow-xl bg-white rounded-[16px] text-neutral-content flex flex-row items-center justify-between p-[16px] ">
      <label className="input w-[400px] input-sm bg-[#f4f4f4]  input-bordered flex items-center gap-2">
        <input
          
          type="text"
          className="grow text-green-600"
          placeholder="Qidirish"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex flex-row gap-[12px] items-center">
        <div className="flex w-[170px] flex-row py-[20px] px-[12px] gap-[10px] items-center">
          <span className="text-[#00000066] font-mono text-[16px] font-semibold">
            12:24:34
          </span>
          <hr className="w-[1px] h-[20px] bg-[#000000cc]" />
          <span className="text-[#00000066] w-full font-mono text-[16px] font-semibold">
            30-may
          </span>
        </div>
        <img
          className="p-[10px] rounded-[8px] border-[1px] border-[#00000014] bg-[#f4f4f4]"
          src="./nav.svg"
          alt=""
        />
        <div className="flex flex-row gap-[6px] items-center">
          <img src="./user.svg" alt="" />
          <h2 className="text-[#000] flex flex-col font-mono text-[14px] font-bold ">
            Doktor
            <span className="font-mono text-[12px] font-normal text-[#00000066]">
              Azizjon
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
