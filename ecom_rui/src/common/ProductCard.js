import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import CardActionBtn from "./CardActionBtn";
import "./ProductCard.css";

const ProductCard = ({ p, actionBtnInfo, actionBtnCallbck, flagUIOnly }) => {
  const [btnInfo, setBtnInfo] = useState(actionBtnInfo);

  const actionBtnHandler = (pId) => {
    if (btnInfo?.isRemoveActionBtn) {
      const productId = pId;
      actionBtnCallbck(productId, flagUIOnly);
    } else {
      const addToCartObj = {
        userId: window.sessionStorage.getItem("ecommvp_userid"),
        productId: p?.pid,
      };

      actionBtnCallbck(addToCartObj, flagUIOnly).then((res) => {
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
  };

  return (
    <Card className={`${
        btnInfo.isRemoveActionBtn ? "card-horizontal" : ""
      }`}>
      {p?.pimage && (
        <Card.Img
          src={p?.pimage}
          className={`${
            btnInfo.isRemoveActionBtn ? "card-img-small" : "card-img-large"
          }`}
        ></Card.Img>
      )}
      <Card.Body
        
      >
        {p?.pname && (
          <Card.Title className="app-txt-var1">{p?.pname}</Card.Title>
        )}
        {!btnInfo?.isRemoveActionBtn && p?.pdesc && (
          <Card.Text>{p?.pdesc}</Card.Text>
        )}
        <span className="h5"> &#8377; {p?.pprice} &nbsp;</span>
        <CardActionBtn
          btnInfo={btnInfo}
          btnCallBack={() => actionBtnHandler(p?.pid)}
        ></CardActionBtn>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
