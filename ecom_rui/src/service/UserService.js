import axios from "axios";
import URI_CONSTANT from "../common/Constants";


export function saveContactDetails(contactData) {

    return axios.put(URI_CONSTANT.ADD_CONTACTDETAILS, contactData).then(res => {
        console.log(res?.data);
        return res;
    })

}

export function getUserDetails(uId){
    return axios.get(URI_CONSTANT.GET_USER, {params : {userId : uId}}).then(res => {
        console.log(res?.data);
        return res;
    })
}