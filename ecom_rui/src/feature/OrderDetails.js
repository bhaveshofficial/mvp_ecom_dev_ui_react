import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getOrder } from "../service/OrderService";
import { getUserDetails } from "../service/UserService";
import "./OrderDetails.css";

const OrderDetails = () => {
  const [orderId, setOrderId] = useState(0);
  const [userDetails, setUserDetails] = useState({});

  let orderDate = new Date();
  orderDate.setDate(orderDate.getDate() + 1);

  //getOrder
  useEffect(() => {
    let id = window.sessionStorage.getItem("ecommvp_userid");
    getOrder(id).then((res) => {
      setOrderId(res?.data.orderId);
    });
  }, []);

  //getUser
  useEffect(() => {
    let id = window.sessionStorage.getItem("ecommvp_userid");
    getUserDetails(id).then((res) => {
      setUserDetails(res?.data);
    });
  }, []);

  return (
    <>
      <Row xs={1} className="mb-3 mt-5 text-center">
        <Col>
          <img src="./success-check.gif" width="200" height="200" alt="success pic"></img>
        </Col>
      </Row>
      <Row xs={1} className="mb-3">
        <Col>
          <h3 className="app-txt-var1">Order placed successfully!</h3>
          <p>
            Order Id: {orderId},{" "}
            <span className="text-bold">
              Arriving on {orderDate.toDateString()}
            </span>
          </p>
        </Col>
      </Row>
      <Row xs={1}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <h4>Delivering to:</h4>
              </Card.Title>
              <Card.Text className="h6 text-normal">
                {userDetails?.contactName}
                <br></br>
                {userDetails?.contactMobile}
                <br></br>
                {userDetails?.contactAddress} {userDetails?.contactState}{" "}
                {userDetails?.contactCity} {userDetails?.contactPincode}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderDetails;
