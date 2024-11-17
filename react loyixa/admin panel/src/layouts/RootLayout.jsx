import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="lg:flex lg:flex-row  lg:items-start lg:justify-between ">
      <header className="bg-base-200 lg:bg-white">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="lg:max-w-[200px] hidden  lg:flex flex-col gap-[20px] px-[10px] py-[10px] lg:bg-orange-400 lg:h-[100vh]">
        <Link to={"login"}>Login</Link>

        {/* <div className="flex flex-col gap-1">
          {names.map((name) => {
            return (
              <span
                key={name}
                className="text-[15px] italic text-slate-100 font-mono capitalize"
              >
                {name}
              </span>
            );
          })}
        </div> */}
      </footer>
    </div>
  );
}

export default RootLayout;
