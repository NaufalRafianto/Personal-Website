import * as React from "react";
import Path from "../path";
export default function Navbar() {
  return (
    <header className="fixed z-10 flex w-full items-center justify-center space-x-96 bg-white bg-opacity-0 p-2.5 shadow backdrop-blur-md">
      <div className="flex h-10 w-16 cursor-pointer items-center hover:text-accent">
        <img
          src="images/rocket.png"
          alt=""
          className="duration-1000 hover:translate-x-[100px] hover:translate-y-[-100px]"
        />
        <h1 className=" font-logo text-5xl duration-500 ">mnr</h1>
      </div>
      <nav className="flex space-x-10">
        <Path className="links" url="/" children="Home" />
        <Path className="links" url="/work" children="Work" />
      </nav>
    </header>
  );
}
