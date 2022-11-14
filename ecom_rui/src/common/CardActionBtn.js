import { Button } from "react-bootstrap"


const CardActionBtn = ({btnInfo, btnCallBack}) => {    

    return <Button variant="success" className={`card-action-btn ${btnInfo.className} `} onClick={btnCallBack} disabled={btnInfo.isDisabled}>
        {btnInfo.title} {btnInfo.isDisabled && <i className="fa fa-check-square fa-lg"></i>}
        </Button>

}
export default CardActionBtn;