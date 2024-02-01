import React from "react";
import LogoIcon from "../common/LogoIcon";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="h-[80px] border-b-[2px] border-b-white flex items-center justify-between">
      <Link to="/" className="pl-[40px]">
        <LogoIcon />
      </Link>

      <div className="pr-[40px]">
        <Nav />
      </div>
    </header>
  );
}
