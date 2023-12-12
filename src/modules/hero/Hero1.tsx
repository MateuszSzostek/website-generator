import React from "react";
import Section from "../../components/Section/Section";
import IHero from "./Hero.types";

export default function Hero1({
  title,
  description,
  majorBtnText,
  minorBtnText,
  image,
  altImage,

  moduleWidth,
  moduleHeight,
  shadow,
  rounded,
  firstColorAccent,
  secondColorAccent,
  thirdColorAccent,
}: IHero) {
  return (
    <Section>
      <div className="sm:px-28">
        <div
          style={{ minWidth: moduleWidth, minHeight: moduleHeight }}
          className="relative flex items-center w-full"
        >
          <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                  <div className="max-w-xl text-center lg:text-left">
                    <div>
                      {title && (
                        <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                          {title}
                        </p>
                      )}
                      {description && (
                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                          {description}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                      {majorBtnText && (
                        <a
                          className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                          href="#"
                        >
                          <span> {majorBtnText} &nbsp; → </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                  {image && (
                    <img
                      className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                      alt={altImage ? altImage : "image alternative text"}
                      src={image}
                      //src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
