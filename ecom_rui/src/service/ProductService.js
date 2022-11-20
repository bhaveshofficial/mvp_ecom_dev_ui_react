import axios from "axios";
import URI_CONSTANT from "../common/Constants";
import {productDetails} from './DataService_UIOnly';

export const getProducts = (callbackFn) => {
  axios.get(URI_CONSTANT.GET_PRODUCTLIST).then((res) => {
    console.log(res?.data);
    callbackFn(res?.data);
  });
}
//UI Only flow
export const getProducts_UIOnly = (callbackFn) => {    
    //products from data service
    callbackFn(productDetails);
}
