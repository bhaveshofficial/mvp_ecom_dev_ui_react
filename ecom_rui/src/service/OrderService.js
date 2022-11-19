import axios from "axios";
import URI_CONSTANT from "../common/Constants";


export function placeOrder(uId){
    return axios.post(URI_CONSTANT.PLACE_ORDER, null, {params : {userId: uId}}).then(res => {
        console.log(res?.data);
        return res;
    })

}

export function getOrder(uId){
    return axios.get(URI_CONSTANT.GET_ORDER, {params : {userId: uId}}).then(res => {
        console.log(res?.data);
        return res;
    })
}