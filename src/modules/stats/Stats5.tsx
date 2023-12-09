import React from "react";
import Section from "../../components/Section/Section";

export default function Stats5() {
  return (
    <Section>
      <div className="bg-gray-100 w-full h-screen grid justify-center content-center">
        <div className="w-fit rounded-[25px] bg-white p-8 aspect">
          <div className="h-12">
            <svg
              className="h-full fill-white stroke-blue-500 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
          <div className="my-2">
            <h2 className="text-4xl font-bold">
              <span>2680</span> +
            </h2>
          </div>

          <div>
            <p className="mt-2 font-sans text-base font-medium text-gray-500">
              Put The Client First
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
