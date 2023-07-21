import React from "react";
import NavLinks from "./NavLinks";
import { getMeData } from "@/actions/me";
import Image from "next/image";

export default async function Navbar() {
  const me = await getMeData();

  return (
    <header>
      <nav className="flex text-2xl font-semibold mb-12 border border-dashed border-neutral-700 px-8 py-4 rounded-full justify-between">
        <span>{me.name}</span>
        <NavLinks />
      </nav>
    </header>
  );
}
