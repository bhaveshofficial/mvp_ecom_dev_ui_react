/**
 * Generates user id, to be used to map order details with user.
 * flag_UIOnly, indicates mode of app (UIOnly, UI + Backend)
 **/
const getUserId = (flag_UIOnly) => {

    if(!flag_UIOnly){
        //call backend service;
    }
    else {
        return 1001;
    }
}

export default getUserId;