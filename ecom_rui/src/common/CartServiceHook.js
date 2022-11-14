import { useContext } from "react"
import ecomAppCtx from "./AppContext"

const useCartServiceHook = () => {
    const {ctxObj, setCtxObj} = useContext(ecomAppCtx);


    const updateCardActionBtnInfo = (cardActionBtnInfo) => {

        setCtxObj({...ctxObj, 'cardActionBtnInfo' :cardActionBtnInfo})

    }

    return {updateCardActionBtnInfo};


}

export default useCartServiceHook;