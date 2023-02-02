import ICard from "./ICard";
import IItem from "./IItem";
interface IModel {
  lastArray?:number[];
  isPopapOpen:boolean;
  isBurgerOpen:boolean;
  fillWrapper:()=>number[];
  checkWindowSize:()=>void;
  items:IItem[];
  cards:ICard[];
}

export default IModel;