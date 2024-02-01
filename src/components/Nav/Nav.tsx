import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="text-orange flex gap-[10px]">
        <Link to="/">
          <li className="navLink">Home</li>
        </Link>
        <Link to="/rounds">
          <li className="navLink">Rounds</li>
        </Link>
        <Link to="/">
          <li className="navLink">unknown</li>
        </Link>
      </ul>
    </nav>
  );
}
