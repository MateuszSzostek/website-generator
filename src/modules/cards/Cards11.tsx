import React from "react";
import Section from "../../components/Section/Section";

export default function Cards11() {
  return (
    <Section>
      <div className="relative cursor-pointer">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
        <div className="relative p-6 bg-white border-2 border-indigo-500 rounded-lg hover:scale-105 transition duration-500">
          <div className="flex items-center">
            <span>😎</span>
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
              Cool Feature
            </h3>
          </div>
          <p className="text-gray-600">
            This is the short description of your feature.
          </p>
        </div>
      </div>
    </Section>
  );
}
