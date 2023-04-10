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
  filteredItems?:any;
  checkLastPage?:any;
  checkFirstPage?:any;
  setFirstPage?:any;
  setLastPage?:any;
  numPages?:any;
}

export default IModel;