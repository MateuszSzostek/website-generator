import React from "react";
import IModuleFormCommonFields from "./ModuleFormCommonFields.types";

const inputLabelStyles = "text-xs";
const inputStyles = "p-1 bg-slate-200 rounded-md text-xs mb-3";

export default function ModuleFormCommonFields({
  register,
  id,
}: IModuleFormCommonFields) {
  return (
    <div className="border p-2 flex flex-col ml-3 w-full">
      <label htmlFor="module-height" className={inputLabelStyles}>
        Module Height
      </label>
      <input
        name="module-height"
        {...register(`modules[${id}].module.moduleHeight`)}
        className={inputStyles}
      />

      <label htmlFor="module-width" className={inputLabelStyles}>
        Module Width
      </label>
      <input
        name="module-width"
        {...register(`modules[${id}].module.moduleWidth`)}
        className={inputStyles}
      />

      <label htmlFor="borderRadius" className={inputLabelStyles}>
        Border Radius
      </label>
      <input
        name="rounded"
        {...register(`modules[${id}].module.rounded`)}
        className={inputStyles}
      />

      <div className="flex flex-row">
        <label htmlFor="shadow" className={inputLabelStyles}>
          Shadow
        </label>
        <input
          name="shadow"
          type="checkbox"
          {...register(`modules[${id}].module.shadow`)}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col mr-3">
          <label htmlFor="major-color" className={inputLabelStyles}>
            Major Color
          </label>
          <input
            name="majorColor"
            type="color"
            {...register(`modules[${id}].module.majorColor`)}
            className={inputStyles}
          />
        </div>
        <div className="flex flex-col mr-3">
          <label htmlFor="minor-color" className={inputLabelStyles}>
            Minor Color
          </label>
          <input
            name="minorColor"
            type="color"
            {...register(`modules[${id}].module.minorColor`)}
            className={inputStyles}
          />
        </div>
        <div className="flex flex-col mr-3">
          <label htmlFor="first-color-accent" className={inputLabelStyles}>
            First Color Accent
          </label>
          <input
            name="firstColorAccent"
            type="color"
            {...register(`modules[${id}].module.firstColorAccent`)}
            className={inputStyles}
          />
        </div>
        <div className="flex flex-col mr-3">
          <label htmlFor="second-color-accent" className={inputLabelStyles}>
            Second Color Accent
          </label>
          <input
            name="secondColorAccent"
            type="color"
            {...register(`modules[${id}].module.secondColorAccent`)}
            className={inputStyles}
          />
        </div>
        <div className="flex flex-col mr-3">
          <label htmlFor="third-color-accent" className={inputLabelStyles}>
            Third Color Accent
          </label>
          <input
            name="thirdColorAccent"
            type="color"
            {...register(`modules[${id}].module.thirdColorAccent`)}
            className={inputStyles}
          />
        </div>
      </div>
    </div>
  );
}
