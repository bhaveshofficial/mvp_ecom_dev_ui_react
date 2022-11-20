import axios from "axios";
import URI_CONSTANT from "../common/Constants";
import {getCart_UIOnly, addToCart_UIOnly, removeFromCart_UIOnly} from './DataService_UIOnly';

export function addToCart(addToCartObj, flagUIOnly) {
  if (!flagUIOnly) {
    return axios.post(URI_CONSTANT.POST_ADDTOCART, addToCartObj).then((res) => {
      console.log(res?.data);
      return res;
    });
  } else {
    addToCart_UIOnly(addToCartObj);
    return new Promise(function (sCallback, fCallback) {
      sCallback({ data: "ADDTOCART_SUCCESS" });
    });
  }
}

export function getCart(flagUIOnly) {
  const sessionUserId = window.sessionStorage.getItem("ecommvp_userid");
  if(!flagUIOnly){
    return axios
    .get(URI_CONSTANT.GET_CART, { params: { userId: sessionUserId } })
    .then((res) => {
      console.log(res?.data);
      return res;
    });
  }
  else {
    const products  = getCart_UIOnly(sessionUserId);
    return new Promise(function(sCallback, fCallback){
      sCallback({data: products});
    });
  }
  
}

export function removeFromCart(pId, flagUIOnly) {
  const sessionUserId = window.sessionStorage.getItem("ecommvp_userid");

  if(!flagUIOnly){
    return axios
    .delete(URI_CONSTANT.REMOVE_FROMCART, {
      data: { userId: sessionUserId, productId: pId },
    })
    .then((res) => {
      console.log(res?.data);
      return res;
    });
  }
  else {
    removeFromCart_UIOnly(sessionUserId, pId);
    return new Promise(function(sCallback, fCallback){
      sCallback('REMOVEFROMCART_SUCCESS');
    });
  }
  
}



