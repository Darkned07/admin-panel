import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="lg:flex lg:flex-row  lg:items-start lg:justify-between ">
      <header className="bg-[#288994] lg:bg-white">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default RootLayout;
