"use client";
import { MenuIcon } from "lucide-react";
import { DrawerContent, HeaderDrawer } from "../libs/HeaderDrawer";
import { useState } from "react";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <HeaderDrawer
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        drawerBtn={() => {
          return (
            <button>
              <MenuIcon />
            </button>
          );
        }}
      >
        <DrawerContent children={"salom"}  drawerBtn={() => {
          return (
            <button>
              <MenuIcon />
            </button>
          );
        }} ></DrawerContent>
      </HeaderDrawer>
    </>
  );
}

export default Navbar;
