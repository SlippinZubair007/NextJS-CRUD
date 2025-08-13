"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold text-white">Next</span>
          <span className="text-xl font-bold text-white">JS</span>
          <Flame className="w-6 h-6 text-amber-400 animate-pulse" />
        </Link>

        {/* Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-base text-white">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="px-3 py-1 rounded hover:text-black hover:bg-amber-500 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
