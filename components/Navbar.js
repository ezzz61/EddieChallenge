import { useState } from "react";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }
  return (
    <nav className="nav mx-auto flex justify-between mt-8 items-center font-poppins md:w-11/12 xxl:w-12/12">
      <div className="">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="md:w-7/12 lg:w-6/12">
        <div className="">
          <button className="md:hidden" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
          <div
            className={`sm:transition-all md:transition-none ${
              toggle
                ? "sm:translate-x-full md:translate-x-0"
                : "bg-white-normal"
            } overflow-y-hidden sm:fixed md:relative right-0 top-0 left-0 sm:gap-y-16 sm:items-center md:items-stretch z-10 flex-col h-full w-full flex flex-row justify-center`}
          >
            <button
              className="md:hidden fixed right-5 top-9"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 0 24 24"
                width="28px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
            <ul className="flex sm:flex-col md:flex-row sm:gap-y-24 md:gap-y-0 font-poppins md:justify-between md:relative font-medium">
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
        </div>
      </div>
    </nav>
  );
}
