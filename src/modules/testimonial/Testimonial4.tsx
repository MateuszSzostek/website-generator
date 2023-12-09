import React from "react";
import Section from "../../components/Section/Section";

export default function Testimonial4() {
  return (
    <Section>
      <div className="max-w-sm">
        <div className="shadow-lg rounded overflow-hidden">
          <img
            className=""
            src="https://loremflickr.com/g/600/400/girl"
            alt="alt text"
          />
          <div className="bg-white p-12">
            <p className="font-light text-xl italic font-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="mt-4 font-light text-sm text-gray-500">
              Customer Support Pro
            </p>
            <p className="mt-1 font-semibold text-sm text-gray-900">
              US transport
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
