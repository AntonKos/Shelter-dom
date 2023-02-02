interface IModel {
  lastArray?:number[];
  isPopapOpen:boolean;
  isBurgerOpen:boolean;
  fillWrapper:()=>number[];
  checkWindowSize:()=>void;
}

export default IModel;