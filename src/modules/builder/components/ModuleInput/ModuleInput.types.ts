interface IModuleInput {
  schema: string;
  id: string;
  name: string;
  image: string;
  selectModule: (id: string, schema: string) => void;
}

export default IModuleInput;
