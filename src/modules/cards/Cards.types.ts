import ICommonPropsModules from "../CommonPropsModules";

interface ICards extends ICommonPropsModules {
  title?: string;
  description?: string;
  cards: ICard[];
}

interface ICard {}

export default ICards;
