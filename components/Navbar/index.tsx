import React from "react";
import NavLinks from "./NavLinks";
import { getMeData } from "@/actions/me";

export default async function Navbar() {
  const me = await getMeData();
  if(!me) return  null
  return (
    <header>
      <nav
        className="
        nav-index
        fixed top-0 inset-x-0
        flex items-center md:justify-between justify-center  
        bg-background border border-t-0 border-dashed border-neutral-700 
        px-8 py-5
        "
      >
        <span className="px-4 py-3 rounded-full bg-primary text-sm font-bold  hidden md:inline">{me.name}</span>
        <NavLinks />
      </nav>
    </header>
  );
}
