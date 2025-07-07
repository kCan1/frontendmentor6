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
      className={`w-[400px] h-[300px] bg-blue-100 border-t-6 rounded-md shadow-xl flex md:flex-col p-8 relative ${className}`}
      {...restProps}
    >
      <section className="flex-1 text-start w-full">
        <h1 className="font-bold text-xl mb-2  text-slate-700">{title}</h1>
        <p className="font-normal text-slate-600">{description}</p>
      </section>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-20 w-20 absolute bottom-10 right-10"
      />
    </div>
  );
}
