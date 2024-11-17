import { Outlet } from "react-router-dom";
import { ChevronsRight, Github } from "lucide-react";
import { TimelineContent } from "../libs/framer-timeline";
import { useRef } from "react";
import Navbar from "../components/Navbar";

function MainLayout() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  return (
    <>
      {/* Navbar */}
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </>
  );
}

export default MainLayout;
