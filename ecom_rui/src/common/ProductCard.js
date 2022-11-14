import { useState } from "react";
import { Button, Card } from "react-bootstrap"

import CardActionBtn from "./CardActionBtn";
import './ProductCard.css';



const ProductCard = ({p, actionBtnInfo, actionBtnCallbck}) => {  

    const [btnInfo, setBtnInfo] = useState(actionBtnInfo);


    const actionBtnHandler = () => {

        
        const addToCartObj = {
            userId : window.sessionStorage.getItem('ecommvp_userid'),
            productId : p?.pid
        }    

        actionBtnCallbck(addToCartObj).then((res) => {
          console.log("comong " + res?.data);
          if (res?.data === "ADDTOCART_SUCCESS") {
            setBtnInfo({
              isDisabled: true,
              isSuccessFeedback: true,
              isRemoveActionBtn: false,
              className: "card-sucessfeedback-btn",
              title: "",
            });
          }
        });
        
    }

    return <Card>
        {
            p?.pimage && <Card.Img src={p?.pimage} width="100" height="200">

        </Card.Img>
        }
        <Card.Body>
            {
                p?.pname && <Card.Title className="app-txt-var1">
                {p?.pname}
            </Card.Title>
            }
            {
                p?.pdescription && <Card.Text>
                    {p?.pdescription}

            </Card.Text>
            }
            <span className="h5"> &#8377; {p?.pprice} &nbsp;</span>
            <CardActionBtn btnInfo={btnInfo} btnCallBack={actionBtnHandler}></CardActionBtn>
        </Card.Body>
    </Card>

}

export default ProductCard;