import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const lists = [
    { id: 1, name: "Bosh Sahifa", href: "/", img: "./home.svg" },
    { id: 2, name: "Bemorlar", href: "bemorlar", img: "./bemor.svg" },
  ];

  return (
    <div className="w-full h-[100%]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content hidden  lg:flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-[#288994] rounded-[24px] text-base-content min-h-full w-80 p-4">
            <div>
              <Link to={"/"}>
                <img src="./logo.svg" alt="" />
              </Link>
              <hr className="w-full mt-[10px] border-[#0000001A]" />
              <details className="collapse bg-[#3DACB9] mt-[30px]">
                <summary className="collapse-title ">
                  <div className="flex flex-row gap-[10px] items-center">
                  <img src="./dash.svg" alt="" className="p-[8px] bg-white rounded-[6px]" />
                    <span className="font-semibold text-[#FAFAFA] font-mono text-[16px]">Dashboard</span>
                  </div>
                </summary>
                <div className="collapse-content">
                  <p>content</p>
                </div>
              </details>
              <ul className="mt-[10px] flex flex-col gap-[12px] p-[8px] text-[#E2FCFF] text-[16px] font-semibold">
                {lists.map((list) => {
                  return (
                    <li className="" key={list.id}>
                      <Link
                        to={list.href}
                        className="flex flex-row items-center gap-[10px]"
                      >
                        <img
                          className="bg-white p-[8px] rounded-[6px]"
                          src={list.img}
                          alt=""
                        />
                        {list.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2 header */}
      <div className="navbar max-container w-full  lg:hidden block ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {lists.map((list) => {
                return (
                  <li key={list.id}>
                    <Link to={list.href}>{list.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Admin panel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {lists.map((list) => {
              return (
                <li key={list.id}>
                  <Link to={list.href}>{list.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
