import axios from "axios";
import URI_CONSTANT from '../common/Constants';

/**
 * Generates user id, to be used to map order details with user.
 * flag_UIOnly, indicates mode of app (UIOnly, UI + Backend)
 **/
 function  getUserId(flag_UIOnly){
    
    if(!flag_UIOnly){
        console.log('calling getuserid')
        axios.get(URI_CONSTANT.GET_USERID)
        .then(res => {
            let uId = res?.data;   
            window.sessionStorage.setItem('ecommvp_userid', uId);         
        })
    }
    else {
        let userId = 1;
        window.sessionStorage.setItem('ecommvp_userid', userId);         
    }        
}



export default getUserId;