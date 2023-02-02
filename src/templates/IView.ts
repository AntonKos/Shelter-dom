interface IView {
  bindChangeBurger:(arg0:()=>void)=>void;
  bindOpenCloseBurger:(arg0:()=>void)=>void;
  bindCheckBurgerOpen:(arg0:()=>boolean)=>void;
  bindCheckPopup:(arg0:()=>boolean)=>void;
  bindClickOutsideListener:(arg0:()=>void, arg1:()=>void)=>void;
  bindClickCloseBtnListener:(arg0:()=>void)=>void;

  bindFillWrapper:(arg0:()=>number[])=>void;

}

export default IView;