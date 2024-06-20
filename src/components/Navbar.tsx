import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="shadow-md ">
      <nav className="flex container mx-auto py-6 px-8 justify-between items-center ">
        <div>Logo</div>
        <div className=" flex gap-8 px-4 text-green-600 font-medium tracking-wide">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
