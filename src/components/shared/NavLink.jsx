// NavLink.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Custom NavLink component to handle active state
const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={` *
        ${isActive ? "border-b-2 border-b-red-500" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
