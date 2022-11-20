import axios from "axios";
import URI_CONSTANT from "../common/Constants";
import {placeOrder_UIOnly, getOrder_UIOnly} from './DataService_UIOnly';


export function placeOrder(uId, flagUIOnly){
    if(!flagUIOnly){
        return axios.post(URI_CONSTANT.PLACE_ORDER, null, {params : {userId: uId}}).then(res => {
            console.log(res?.data);
            return res;
        })
    }
    else {
        placeOrder_UIOnly(uId)
        return new Promise(function(sCallbck, fCallbck){
            sCallbck({data : 'PLACEORDER_SUCCESS'});
        })
    }
    

}

export function getOrder(uId, flagUIOnly){
    if(!flagUIOnly){
        return axios.get(URI_CONSTANT.GET_ORDER, {params : {userId: uId}}).then(res => {
            console.log(res?.data);
            return res;
        })
    }
    else {
        let orderVal = getOrder_UIOnly(uId);
        return new Promise(function(sCallbck, fCallbck){
            sCallbck({data : {orderId : orderVal}});
        })
    }
    
}