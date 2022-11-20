import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../common/ProductCard";
import { getCart, removeFromCart } from "../service/CartService";
import "./Cart.css";

const Cart = ({flagUIOnly}) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const cardActionBtnInfo = {
    isDisabled: false,
    isSuccessFeedback: false,
    isRemoveActionBtn: true,
    className: "card-remove-btn",
    title: "Remove",
  };

  const updateCart = (pId) => {
    const result = cart.filter( item => item?.pid !== pId);
    setCart(result);
  }

  const calCartTotal = () => {
    
    const result = cart.map(item => item.pprice).reduce((total, num) => {return total + num;}, 0);    
    setCartTotal(result);
  }

  const removeProduct = (productId, flagUIOnly) => {    
    removeFromCart(productId, flagUIOnly).then(res => updateCart(productId));
  };

  useEffect(() => {
    getCart(flagUIOnly).then((res) => {
      setCart(res?.data);
      calCartTotal();
    });
  }, []);  

  return (
    <>
      <Row xs={1} className="g-4 mt-2">
        {cart.map((item) => {
          return (
            <Col key={item?.pid}>
              <ProductCard
                p={item}
                actionBtnInfo={cardActionBtnInfo}
                actionBtnCallbck={removeProduct}
                flagUIOnly={flagUIOnly}
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-3">
        <Col>
        <span className="h3">Cart Total: {"  "} {cartTotal}</span>        
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
        <Button variant="success" className="app-nav-action-btn cart-nav-act-btn">
          <Link className="app-action-link" to="/contactDetails"><i className="fa fa-address-book" ></i> {" "}Add Contact Details<br></br><i className="fa fa-arrow-right fa-2x"></i> </Link>
        </Button>
        </Col>        
      </Row>
    </>
  );
};

export default Cart;
