import ICard from "./ICard";
import IItem from "./IItem";
interface IView {
  bindChangeBurger:(arg0:()=>void)=>void;
  bindOpenCloseBurger:(arg0:()=>void)=>void;
  bindCheckBurgerOpen:(arg0:()=>boolean)=>void;
  bindCheckPopup:(arg0:()=>boolean)=>void;
  bindClickOutsideListener:(arg0:()=>void, arg1:()=>void)=>void;
  bindClickCloseBtnListener:(arg0:()=>void)=>void;

  bindFillWrapper:(arg0:()=>number[])=>void;
  setWrappers:(arg0:IItem[])=>void;
  bindSetPopap:(arg0:()=>void, arg1:ICard[])=>void;
  addAnimationEndListener:(arg0:()=>void,  arg1:ICard[],  arg2:IItem[])=>void;
  setItems:(arg0:IItem[])=>void;
  bindNextPageHandler?:any;

}

export default IView;