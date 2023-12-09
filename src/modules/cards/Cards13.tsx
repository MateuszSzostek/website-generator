import React from "react";
import Section from "../../components/Section/Section";

export default function Cards13() {
  return (
    <Section>
      <div className="relative max-w-xl mx-auto mt-20">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">
            Get Lost in Mountains
          </h2>
        </div>
      </div>
    </Section>
  );
}
