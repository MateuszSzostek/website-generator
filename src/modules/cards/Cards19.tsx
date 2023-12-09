import React from "react";
import Section from "../../components/Section/Section";

export default function Cards19() {
  return (
    <Section>
      <a
        className="relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto mt-24"
        href="#"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="my-4">
          <h2 className="text-white text-2xl font-bold pb-2">Card Title</h2>
          <p className="text-gray-300 py-1">
            Card description or content goes here.
          </p>
        </div>

        <div className="flex justify-end">
          <button className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800">
            Click Me
          </button>
        </div>
      </a>
    </Section>
  );
}
