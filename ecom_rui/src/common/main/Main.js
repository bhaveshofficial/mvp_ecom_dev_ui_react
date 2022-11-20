import "./Main.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import ProductListing from "../../feature/ProductListing";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Cart from "../../feature/Cart";
import ErrorNotFound from "../ErrorNotFound";
import ContactDetails from "../../feature/ContactDetails";
import OrderDetails from "../../feature/OrderDetails";

const Main = ({flagUIOnly}) => {
  // const [greeting, updateGreeting] = useState("Hello");

  return (
    <Container fluid="sm">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={()=> <ProductListing flagUIOnly={flagUIOnly}></ProductListing>}></Route>
          <Route path="/products" component={()=> <ProductListing flagUIOnly={flagUIOnly}></ProductListing>}></Route>
          <Route path="/cart" component={()=> <Cart flagUIOnly={flagUIOnly}></Cart>}></Route>
          <Route path="/contactDetails" component={()=> <ContactDetails flagUIOnly={flagUIOnly}></ContactDetails>}></Route>
          <Route path="/orderDetails" component={()=> <OrderDetails flagUIOnly={flagUIOnly}></OrderDetails>}></Route>
          <Route component={ErrorNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default Main;
