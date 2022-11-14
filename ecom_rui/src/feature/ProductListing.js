import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import ProductCard from "../common/ProductCard";
import "./ProductListing.css";
import { getProducts } from "../service/ProductService";
import { addToCart } from "../service/CartService";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const cardActionBtnInfo = {
    isDisabled: false,
    isSuccessFeedback: false,
    isRemoveActionBtn: false,
    className: "card-add-btn",
    title: "Add To Cart",
  };

  const call_AddToCart = (addToCartObj) => {
    return addToCart(addToCartObj);
  };

  const [productList, updateProductList] = useState([]);

  useEffect(() => {
    //call addToCart service method, with callback args
    getProducts(updateProductList);
  }, []);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {productList.map((product) => {
          return (
            <Col key={product?.pid}>
              <ProductCard
                p={product}
                actionBtnInfo={cardActionBtnInfo}
                actionBtnCallbck={call_AddToCart}
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
      <Row xs={1} className="mt-5">
        <Col>
          <Button variant="success" className="app-nav-action-btn">
            <Link to="/cart" className="app-action-link">
              Go To Cart &nbsp;{" "}
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </Link>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProductListing;
