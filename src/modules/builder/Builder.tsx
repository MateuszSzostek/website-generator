import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./Builder.styles.css";
import ModuleInput from "./components/ModuleInput/ModuleInput";

import ModuleFormBlogCards from "./components/ModuleForm/BlogCards/ModuleFormBlogCards";
import ModuleFormHero from "./components/ModuleForm/Hero/ModuleFormHero";
import ModuleFormCards from "./components/ModuleForm/Cards/ModuleFormCards";
import ModuleFormContacts from "./components/ModuleForm/Contacts/ModuleFormContacts";
import ModuleFormPeople from "./components/ModuleForm/People/ModuleFormPeople";
import ModuleFormPricing from "./components/ModuleForm/Pricing/ModuleFormPricing";
import ModuleFormStats from "./components/ModuleForm/Stats/ModuleFormStats";
import ModuleFormTestimonial from "./components/ModuleForm/Testimonial/ModuleFormTestimonial";

let modulesList = require("./modulesList.json");
let blogCard = require("./blogCardSchema.json");
let hero = require("./heroSchema.json");
let cards = require("./cardsSchema.json");
let contacts = require("./contactsSchema.json");
let people = require("./peopleSchema.json");
let pricing = require("./pricingSchema.json");
let stats = require("./statsSchema.json");
let testimonial = require("./testimonialSchema.json");

function getSchemaType(componentType: string) {
  switch (componentType) {
    case "blogCards":
      return blogCard;
    case "hero":
      return hero;
    case "cards":
      return cards;
    case "contacts":
      return contacts;
    case "people":
      return people;
    case "pricing":
      return pricing;
    case "stats":
      return stats;
    case "testimonial":
      return testimonial;
    default:
      return hero;
  }
}

function getComponentForm(componentType: string) {
  console.log(componentType);
  switch (componentType) {
    case "blogCards":
      return ModuleFormBlogCards;
    case "hero":
      return ModuleFormHero;
    case "cards":
      return ModuleFormCards;
    case "contacts":
      return ModuleFormContacts;
    case "people":
      return ModuleFormPeople;
    case "pricing":
      return ModuleFormPricing;
    case "stats":
      return ModuleFormStats;
    case "testimonial":
      return ModuleFormTestimonial;
    default:
      return ModuleFormHero;
  }
}

export default function Builder() {
  const [builderOn, setBuilderOn] = useState<boolean>(false);
  const [addModuleModal, setAddModuleModal] = useState<boolean>(false);

  const [modules, setModules] = useState<any[]>([]);

  console.log(modulesList);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "modules", // unique name for your Field Array
    }
  );

  function handleShowBuilder() {
    setBuilderOn(!builderOn);
  }

  function handleToggleModuleSelector() {
    setAddModuleModal(!addModuleModal);
  }

  function handleSelectModule(id: string, schema: string) {
    handleToggleModuleSelector();
    const componentType = getSchemaType(id);
    append({
      module: { ...componentType, type: id, schema },
    });
  }

  function handleFormSubmit(formData: any) {
    console.log(formData);
  }

  useEffect(() => {
    console.log(fields);
  }, []);

  return (
    <div className="builder__container flex justify-center">
      <div
        className={`builder-app__container absolute w-full h-full bg-sky-200 transition p-8 flex flex-col justify-center ${
          builderOn === true ? "on" : ""
        }`}
      >
        <form
          className="flex flex-col overflow-y-scroll"
          onSubmit={handleSubmit(handleFormSubmit)}
          noValidate
        >
          {fields.map((field, index) => {
            const ComponentForm = getComponentForm(field?.module?.schema);

            return (
              <ComponentForm
                register={register}
                remove={remove}
                id={index.toString()}
              />
            );
          })}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 rounded h-10"
          >
            Submit
          </button>
        </form>

        <button
          onClick={handleToggleModuleSelector}
          className="bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 rounded h-10"
        >
          Add Module
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute bottom-0"
        onClick={handleShowBuilder}
      >
        Show Builder
      </button>

      {addModuleModal === true && (
        <div aria-hidden="true" className="overflow-y-scroll">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  All Avaliable Modules
                </h3>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                {modulesList.map((el) => (
                  <ModuleInput
                    key={el?.id}
                    {...el}
                    selectModule={handleSelectModule}
                  />
                ))}
              </div>

              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={handleToggleModuleSelector}
                  type="button"
                  className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
