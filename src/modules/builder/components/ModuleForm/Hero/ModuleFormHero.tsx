import React from "react";
import ModuleFormCommonFields from "../CommonFields/ModuleFormCommonFields";
import IModuleForm from "../ModuleForm.types";

const inputLabelStyles = "text-xs";
const inputStyles = "p-1 bg-slate-200 rounded-md text-xs mb-3";

export default function ModuleFormHero({ register, id, remove }: IModuleForm) {
  return (
    <div className="border p-2 flex flex-col m-3 w-full">
      <div className="flex flex-row my-3">
        <h2 className="ml-3">Hero Component</h2>
      </div>
      <div className="flex flex-row w-full columns-2">
        <ModuleFormCommonFields register={register} id={id} />

        <div className="border p-2 flex flex-col ml-3 w-full">
          <label htmlFor="hero-title" className={inputLabelStyles}>
            Title
          </label>
          <input
            name="hero-title"
            {...register(`modules[${id}].module.title`)}
            className={inputStyles}
          />
          <label htmlFor="hero-title" className={inputLabelStyles}>
            Description
          </label>
          <input
            name="hero-description"
            {...register(`modules[${id}].module.description`)}
            className={inputStyles}
          />

          <label htmlFor="hero-majorBtnText" className={inputLabelStyles}>
            Major Button Text
          </label>
          <input
            name="hero-majorBtnText"
            {...register(`modules[${id}].module.majorBtnText`)}
            className={inputStyles}
          />

          <label htmlFor="hero-minorBtnText" className={inputLabelStyles}>
            Minor Button Text
          </label>
          <input
            name="hero-minorBtnText"
            {...register(`modules[${id}].module.minorBtnText`)}
            className={inputStyles}
          />

          <label htmlFor="hero-image" className={inputLabelStyles}>
            Image
          </label>
          <input
            name="hero-image"
            {...register(`modules[${id}].module.image`)}
            className={inputStyles}
          />

          <label htmlFor="hero-altImage" className={inputLabelStyles}>
            Image Alternative Text
          </label>
          <input
            name="hero-altImage"
            {...register(`modules[${id}].module.altImage`)}
            className={inputStyles}
          />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <button
          type="button"
          onClick={() => remove(id)}
          className="bg-red-500 hover:bg-red-400 text-white font-bold px-4 rounded h-8 mx-3 mt-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
