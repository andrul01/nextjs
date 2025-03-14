"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
   
    <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
              <Link href={"/"} className="">
                <MenuItem setActive={setActive} active={active} item={"Home"}></MenuItem>
              </Link>
              <Link href={"/about"}>
                <MenuItem setActive={setActive} active={active} item={"About"}></MenuItem>
              </Link>
              <Link href={"/services"}>
                <MenuItem setActive={setActive} active={active} item={"Services"}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/branding">Branding</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                    </div>
                </MenuItem>
              </Link>
              <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item={"Contact us"}></MenuItem>
              </Link>
        </Menu>
    </div>
  )
}

export default Navbar
