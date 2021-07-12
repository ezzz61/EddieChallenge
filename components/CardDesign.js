import React from "react";

export default function CardDesign({ position, title, subtitle, image }) {
  return (
    <div className={`${position}`}>
      <div className="rounded-3xl overflow-hidden">
        <img
          src={`/assets/images/${image}`}
          alt={title}
          className="w-full transition-all hover:scale-110"
        />
      </div>
      <p className="text-gray-light mt-4">{title}</p>
      <h4 className="font-semibold text-2xl mt-3">{subtitle}</h4>
    </div>
  );
}
