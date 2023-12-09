import React from "react";
import Section from "../../components/Section/Section";

export default function Testimonial1() {
  return (
    <Section>
      <div className="flex sm:w-full md:w-1/3 mb-8 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3">
        <div className="w-full text-left">
          <img
            src="https://www.svgrepo.com/show/494336/apple.svg"
            className="mb-5 h-10 w-10"
          />
          <p className="text-md text-gray-800 text-left leading-normal mb-5 font-lf-normal">
            I had a great experience at Joe's Diner. The service was top-notch
            and the food was delicious.
          </p>
          <span className="flex item-center">
            <img
              src="https://www.svgrepo.com/show/497628/user-square.svg"
              className="rounded-md mr-3 h-14 w-14"
            />
            <div>
              <p className="text-sm text-gray-600">Leon Bachmann </p>
              <p className="text-sm text-gray-400">Profession</p>
            </div>
          </span>
        </div>
      </div>
    </Section>
  );
}
