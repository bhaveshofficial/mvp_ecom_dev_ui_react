import './Main.css';
import {useState} from 'react';
import {Container} from 'react-bootstrap';
import ProductListing from '../../feature/ProductListing';

const Main = () => {

    // const [greeting, updateGreeting] = useState("Hello");

    return (
        <Container fluid="sm">
            <ProductListing></ProductListing>
        </Container>
    );

}

export default Main;