import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Card({ image, color, title }) {
  const [setActive, setIsActive] = useState(false);

  return (
    <div
      className="w-4/12 flex justify-center rounded-xl transition-all hover:shadow-lg"
      onMouseOver={() => {
        setIsActive(true);
      }}
      onMouseOut={() => {
        setIsActive(false);
      }}
    >
      <div className="py-12 px-6">
        <img
          className={`${color} p-4 rounded-lg`}
          src={`/assets/images/${image}`}
          alt={title}
        />
        <div className="mt-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-6 w-9/12 lg:w-10/12">
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
