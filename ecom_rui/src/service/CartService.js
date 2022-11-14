import axios from "axios";
import URI_CONSTANT from "../common/Constants";

export function addToCart(addToCartObj) {
   return axios.post(URI_CONSTANT.POST_ADDTOCART, addToCartObj).then((res) => {
    console.log(res?.data);
    return res;    
  });
}
