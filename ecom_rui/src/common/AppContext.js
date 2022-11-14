import React from "react";

const EcomAppCtx = React.createContext({
  cardActionBtnInfo: {
    isDisabled: false,
    isSuccessFeedback: false,
    isRemoveActionBtn: false,
    className: "card-add-btn",
    title: "Add To Cart",
  }  
});

export default EcomAppCtx;
