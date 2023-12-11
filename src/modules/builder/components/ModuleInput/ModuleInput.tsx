import React from "react";
import IModuleInput from "./ModuleInput.types";

export default function ModuleInput({
  schema,
  id,
  name,
  image,
  selectModule,
}: IModuleInput) {
  return (
    <div
      onClick={() => selectModule(id, schema)}
      className="flex flex-row justify-between items-center border p-2 cursor-pointer hover:bg-sky-100 transition"
    >
      <img
        style={{ maxHeight: "32px" }}
        className="max-w-xs"
        src="assets/images/hero1.png"
      />
      <h2>
        {name} - {id}
      </h2>
    </div>
  );
}
