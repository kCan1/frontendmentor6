// src/components/Card.jsx
import React from "react";

export default function Card({
  className = "",
  title,
  description,
  imageSrc,
  imageAlt = "",
  ...restProps
}) {
  return (
    <div
      className={`w-[400px] h-[300px] bg-blue-100 border-t-8 rounded-md shadow-xl flex md:flex-col p-8 relative ${className}`}
      {...restProps}
    >
      <section className="flex-1 text-start w-full">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <p className="font-normal text-slate-600">{description}</p>
      </section>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-w-20 max-h-20 absolute bottom-5 right-5"
      />
    </div>
  );
}
