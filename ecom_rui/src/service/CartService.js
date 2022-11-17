import axios from "axios";
import URI_CONSTANT from "../common/Constants";

export function addToCart(addToCartObj) {
  return axios.post(URI_CONSTANT.POST_ADDTOCART, addToCartObj).then((res) => {
    console.log(res?.data);
    return res;
  });
}

export function getCart() {
  const sessionUserId = window.sessionStorage.getItem("ecommvp_userid");
  return axios
    .get(URI_CONSTANT.GET_CART, { params: { userId: sessionUserId } })
    .then((res) => {
      console.log(res?.data);
      return res;
    });
}

export function removeFromCart(pId) {
  const sessionUserId = window.sessionStorage.getItem("ecommvp_userid");
  return axios
    .delete(URI_CONSTANT.REMOVE_FROMCART, {
      data: { userId: sessionUserId, productId: pId },
    })
    .then((res) => {
      console.log(res?.data);
      return res;
    });
}
