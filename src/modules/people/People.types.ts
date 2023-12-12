import ICommonPropsModules from "../CommonPropsModules";

interface IPeople extends ICommonPropsModules {
  title?: string;
  description?: string;
  cards: ICards[];
}

interface ICards {}

export default IPeople;
