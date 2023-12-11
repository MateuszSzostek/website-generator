import React from "react";
import IModuleForm from "../ModuleForm.types";

export default function ModuleFormPeople({
  register,
  id,
  remove,
}: IModuleForm) {
  return (
    <div className="border p-2 flex flex-col">
      <h2>People Component</h2>
      <label htmlFor="people-title">Title</label>
      <input name="people-title" {...register(`modules[${id}].module.title`)} />
      <label htmlFor="people-title">Description</label>
      <input
        name="people-description"
        {...register(`modules[${id}].module.description`)}
      />
      <button
        type="button"
        onClick={() => remove(id)}
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 rounded h-10"
      >
        Remove
      </button>
    </div>
  );
}
