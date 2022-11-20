import axios from "axios";
import URI_CONSTANT from "../common/Constants";
import {saveContactDetails_UIOnly, getUserDetails_UIOnly} from './DataService_UIOnly';


export function saveContactDetails(contactData, flagUIOnly) {

    if(!flagUIOnly){
        return axios.put(URI_CONSTANT.ADD_CONTACTDETAILS, contactData).then(res => {
            console.log(res?.data);
            return res;
        })
    }
    else {
        saveContactDetails_UIOnly(contactData);
        return new Promise(function(sCallbck, fCallbck){
            sCallbck({data: 'ADDCONTACT_SUCCESS'});
        })
    }

    

}

export function getUserDetails(uId, flagUIOnly){
    if(!flagUIOnly){
        return axios.get(URI_CONSTANT.GET_USER, {params : {userId : uId}}).then(res => {
            console.log(res?.data);
            return res;
        })
    }
    else {
        let user = getUserDetails_UIOnly(uId);
        console.log('user details ');
        console.log(user);
        return new Promise(function(sCallbck, fCallbck){
            sCallbck({data : user});
        })
    }
    
}