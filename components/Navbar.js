import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="nav mx-auto flex justify-between mt-8 items-center font-poppins sm:w-11/12 lg:w-11/12 xl:w-11/12 xxl:w-12/12">
      <div className="">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="w-6/12">
        <ul className="flex font-poppins justify-between font-medium sm:hidden lg:inline lg:flex">
          <li className="hover:text-blue-light transition-all">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="hover:text-blue-light transition-all">
            <Link href="/">
              <a>Services</a>
            </Link>
          </li>
          <li className="hover:text-blue-light transition-all">
            <Link href="/">
              <a>Our Works</a>
            </Link>
          </li>
          <li className="hover:text-blue-light transition-all">
            <Link href="/">
              <a>Clients</a>
            </Link>
          </li>
          <li className="hover:text-blue-light transition-all">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
