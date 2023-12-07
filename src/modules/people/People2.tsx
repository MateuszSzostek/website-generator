import React from "react";
import Section from "../../components/Section/Section";

export default function People2() {
  return (
    <Section>
      <div className="bg-[#f3f6ff] flex justify-center items-center min-h-screen">
        <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
          <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
            <h1 className="text-xl mb-4">Hi George</h1>
            <p>
              You can contact us whenever you need help or just curoius about
              something.
            </p>
          </div>
          <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
            <h2 className="font-semibold text-xl">Start chatting</h2>
            <img
              src="https://pbs.twimg.com/profile_images/1602443868527595520/cOjnC2Zh_400x400.jpg"
              className="w-[40%] rounded-full mt-7"
            />
            <p className="mt-3 font-semibold text-lg">Leslie Nielsen</p>
            <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
              <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span>{" "}
              Active
            </span>
            <button className="w-full gradient rounded-md text-white p-4 mt-4 hover:shadow-xl transition-all duration-200 ease-in">
              Send a message
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
