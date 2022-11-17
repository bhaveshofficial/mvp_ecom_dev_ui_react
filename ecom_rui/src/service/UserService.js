import axios from "axios";
import URI_CONSTANT from "../common/Constants";


export function saveContactDetails(contactData) {

    return axios.post(URI_CONSTANT.ADD_CONTACTDETAILS, contactData).then(res => {
        console.log(res?.data);
        return res;
    })

}