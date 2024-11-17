import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const lists = [
    { id: 1, name: "Bosh Sahifa", href: "/" },
    { id: 2, name: "Yangi Kasal qo'shish", href: "create" },
  ];

  return (
    <div className="w-full">
      <div className="drawer hidden lg:block  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-secondary mt-[16px] btn-sm text-[14px] lg:hidden"
          >
            <svg
              viewBox="0 0 700 1000"
              fill="currentColor"
              height="25px"
              width="20px"
            >
              <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
            </svg>
          </label>
        </div>

        {/* width /sm/md/lg/2xl */}
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu flex flex-col gap-[5px] bg-orange-300 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {lists.map((list) => {
              return (
                <li key={list.id}>
                  <Link
                    className=" font-mono text-[18px] text-white hover:text-black hover:bg-white border-[2px] "
                    to={list.href}
                  >
                    {list.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 2 header */}
      <div className="navbar max-container w-full  lg:hidden block">
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
