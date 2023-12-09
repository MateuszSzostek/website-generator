import React from "react";
import Section from "../../components/Section/Section";

export default function BlogCards8() {
  return (
    <Section>
      <div className="block relative group transition hover:scale-105 hover:-rotate-1 max-w-sm">
        <a href="#" target="_blank" className="block">
          <div className="aspect-w-2 aspect-h-1 rounded-2xl border shadow overflow-hidden bg-gray-100">
            <img
              src="https://loremflickr.com/320/200/brazil,rio"
              loading="lazy"
              className="object-center object-cover"
            />
          </div>

          <div className="p-2 space-y-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="flex-1 text-base font-medium text-gray-900">
                Here goes youe article title
              </h3>

              <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1">
                34233
                <svg
                  className="w-3 h-3 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>

            <p className="text-sm text-gray-500">by John Doe</p>
          </div>
        </a>
      </div>
    </Section>
  );
}
