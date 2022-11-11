import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import URI_CONSTANT from '../common/Constants';
import ProductCard from '../common/ProductCard';
import './ProductListing.css';

const ProductListing = () => {


    // const products = [
    //     {id: 1, name: 'shoe'},
    //     {id: 2, name: 'tshirt'}
    // ]
    const btnInfo = {
        'title': 'Add To Cart',
        'action': ''
    }
    const [productList, updateProductList] = useState([]);

    useEffect(()=> {

        axios.get(URI_CONSTANT.GET_PRODUCTLIST).then(res => {
            console.log(res?.data);

            updateProductList(res?.data)
        })

    }, []);

    return (<>        
        <Row xs={1} md={3}>
            {
            productList.map(product => {
                return <Col key={product?.pid}>
                    <ProductCard p={product} btnInfo={btnInfo}></ProductCard>
                </Col>
            })
            }
        </Row>
        </>
    );

}

export default ProductListing;