import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Card({ image, color, title }) {
  const [setActive, setIsActive] = useState(false);

  return (
    <div
      className="md:w-4/12 flex justify-center rounded-xl transition-all hover:shadow-lg"
      onMouseOver={() => {
        setIsActive(true);
      }}
      onMouseOut={() => {
        setIsActive(false);
      }}
    >
      <div className="sm:py-6 sm:px-3 lg:py-12 lg:px-6">
        <img
          className={`${color} p-4 rounded-2xl`}
          src={`/assets/images/${image}`}
          alt={title}
        />
        <div className="mt-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-6 xl:w-9/12 lg:w-12/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
        </div>
        <div className="mt-12">
          <Button active={setActive}>Get started</Button>
        </div>
      </div>
    </div>
  );
}
