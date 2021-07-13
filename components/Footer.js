import React from "react";
import Button from "./Button";
import Link from "next/link";
import Logo from "./Logo";
import Form from "./Form";

export default function Footer() {
  return (
    <footer className="bg-blue-dark mt-64 font-poppins">
      <div className="container w-8/12 mx-auto py-12 flex sm:flex-col lg:flex-row justify-between sm:gap-y-20 lg:gap-y-0">
        <ul className="flex flex-col gap-4 text-white-normal">
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
        <div className="">
          <Link href="/">
            <a>
              <Logo className="text-white-normal" />
            </a>
          </Link>
          <div className="flex gap-3 mt-4">
            <Link href="/">
              <a>
                <img src="/assets/images/instagram.svg" alt="instagram" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img src="/assets/images/linkedin.svg" alt="linkedin" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img src="/assets/images/twitter.svg" alt="twitter" />
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          <p className="mb-4 text-white-normal ">Want us to contact you?</p>
          <Form />
        </div>
      </div>
      <div className="text-white-normal text-center pt-14 pb-5 sm:mt-20 lg:mt-0">
        <p>
          created by{" "}
          <a href="https://www.facebook.com/gias.siganteng/">GiazPawaz</a> -
          devChallenges.io
        </p>
      </div>
    </footer>
  );
}
