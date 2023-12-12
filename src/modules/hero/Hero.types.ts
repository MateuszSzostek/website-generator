import ICommonPropsModules from "../CommonPropsModules";

interface IHero extends ICommonPropsModules {
  title?: string;
  description?: string;
  majorBtnText?: string;
  minorBtnText?: string;
  image?: string;
  altImage?: string;
}

export default IHero;
