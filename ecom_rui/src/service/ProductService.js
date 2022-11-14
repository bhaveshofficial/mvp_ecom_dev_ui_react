import axios from "axios";
import URI_CONSTANT from '../common/Constants';


export const getProducts = (callbackFn) => {

    axios.get(URI_CONSTANT.GET_PRODUCTLIST).then(res => {
        console.log(res?.data);
        callbackFn(res?.data)
    })
}

