import React from "react";
import NavLinks from "./NavLinks";
import { getMeData } from "@/actions/me";

export default async function Navbar() {
  const me = await getMeData();

  return (
    <header>
      <nav
        className="
        flex items-center md:justify-between justify-center  
        border border-dashed border-neutral-700 
        mb-12 px-8 py-4 rounded-full 
        "
      >
        <span className="text-sm font-bold hidden md:inline">{me.name}</span>
        <NavLinks />
      </nav>
    </header>
  );
}
