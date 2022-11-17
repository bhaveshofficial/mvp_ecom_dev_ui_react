import "./ContactDetails.css";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Form, Row, Col} from 'react-bootstrap';
import { saveContactDetails } from "../service/UserService";

const ContactDetails = () => {

    const history = useHistory();
    
    const [name, setName] = useState({val: '', isValid: false, isTouched: false});
    const [email, setEmail] = useState({val: '', isValid: false, isTouched: false});
    const [mobile, setMobile] = useState({val: '', isValid: false, isTouched: false});
    const [address, setAddress] = useState({val: '', isValid: false, isTouched: false});
    const [state, setState] = useState({val: '', isValid: false, isTouched: false});
    const [city, setCity] = useState({val: '', isValid: false, isTouched: false});
    const [pincode, setPincode] = useState({val: 0, isValid: false, isTouched: false});


    const nameValid = name?.isTouched && name?.isValid;
    const emailValid = email?.isTouched && email?.isValid;
    const mobileValid = mobile?.isTouched && mobile?.isValid;
    const addressValid = address?.isTouched && address?.isValid;
    const stateValid = state?.isTouched && state?.isValid;
    const cityValid = city?.isTouched && city?.isValid;
    const pincodeValid = pincode?.isTouched && pincode?.isValid;

    const validateName = (event) => {
        let inputVal = event.target.value;
        if(inputVal?.trim() == ''){
            setName((prevState) => {
                return {val : inputVal, isValid : false, isTouched: true}
            })
        }
        else {
            console.log('coming here');
            setName((prevState) => {
                return {val : inputVal, isValid : true, isTouched: true}
            })
        }
        console.log(event.target.value);
    }

    const validateEmail = (event) => {
        let inputVal = event.target.value;
        if(inputVal?.trim() != '' && inputVal.includes('@')){
            setEmail((prevState) => {
                return {val : inputVal, isValid : true, isTouched: true}
            })            
        }
        else {
            console.log('coming here');
            setEmail((prevState) => {
                return {val : inputVal, isValid : false, isTouched: true}
            })
        }
        console.log(event.target.value);


    }

    const validateMobile = (event) => {

        let inputVal = event.target.value;
        if(inputVal?.trim() != '' && inputVal.match(/^\d+$/) && inputVal.length == 9){
            setMobile((prevState) => {
                return {val : inputVal, isValid : true, isTouched: true}
            })
            
        }
        else {
            console.log('coming here');
            setMobile((prevState) => {
                return {val : inputVal, isValid : false, isTouched: true}
            })
        }
        console.log(event.target.value);

    }


    const validateInput = (event, fieldName) => {

        let inputVal = event.target.value;
        if(inputVal?.trim() != ''){
            switch(fieldName) {
                case 'address':
                    setAddress((prevState) => {
                        return {val : inputVal, isValid : true, isTouched: true}
                    })
                    break;
                case 'state':
                    setState((prevState) => {
                        return {val : inputVal, isValid : true, isTouched: true}
                    })
                    break;
                case 'city':
                    setCity((prevState) => {
                        return {val : inputVal, isValid : true, isTouched: true}
                    })
                    break;
                case 'pincode':
                    if(inputVal == 0){
                        setPincode((prevState) => {
                            return {val : inputVal, isValid : false, isTouched: true}
                        })  
                    }
                    else {
                        setPincode((prevState) => {
                            return {val : inputVal, isValid : true, isTouched: true}
                        })  
                    }
                                      
            }
            
            
        }
        else {

            switch(fieldName) {
                case 'address':
                    setAddress((prevState) => {
                        return {val : inputVal, isValid : false, isTouched: true}
                    })
                    break;
                case 'state':
                    setState((prevState) => {
                        return {val : inputVal, isValid : false, isTouched: true}
                    })
                    break;
                case 'city':
                    setCity((prevState) => {
                        return {val : inputVal, isValid : false, isTouched: true}
                    })
                    break;
                case 'pincode':
                    setPincode((prevState) => {
                        return {val : inputVal, isValid : false, isTouched: true}
                    })                   
                    
            }
            
            
        }
        console.log(event.target.value);

    }

    const formSubmitHandler = (event) => {
        
        event.preventDefault();

        const contactData = {
            userId: window.sessionStorage.getItem("ecommvp_userid"),
            contactName: name?.val,
            contactEmail: email?.val,
            contactMobile: mobile?.val,
            contactAddress: address?.val,
            contactState: state?.val,
            contactCity: city?.val,
            contactPincode: pincode?.val,
        };
        console.log(contactData);
        saveContactDetails(contactData).then(res => {
            console.log('route to next screen');
            history.push('/orderDetails');
        })
    }
    
return <Form onSubmit={formSubmitHandler}>
    <Row xs={1} md={3} className="mb-5">
        <Form.Group as={Col} className="mb-xs-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onBlur={validateName} isValid={nameValid} isInvalid={!nameValid && name?.isTouched}></Form.Control>
            <Form.Control.Feedback type="invalid">Name cannot be empty </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-xs-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onBlur={validateEmail} isValid={emailValid} isInvalid={!emailValid && email?.isTouched}></Form.Control>
            <Form.Control.Feedback type="invalid">Please enter valid email, ex- xyz@gmail.com </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-xs-2">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile no." onBlur={validateMobile} isValid={mobileValid} isInvalid={!mobileValid && mobile?.isTouched}></Form.Control>
            <Form.Control.Feedback type="invalid">Please enter mobile, ex- 912345678 </Form.Control.Feedback>
        </Form.Group>
    </Row>
    <Form.Group className="mb-3">
    <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" onBlur={(event)=> validateInput(event, 'address')} isValid={addressValid} isInvalid={!addressValid && address?.isTouched}></Form.Control>
            <Form.Control.Feedback type="invalid">Address cannot be empty </Form.Control.Feedback>
    </Form.Group>
    <Row xs={1} md={3} className="mb-3">

    <Form.Group as={Col} className="mb-xs-2">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter state" onBlur={(event)=> validateInput(event, 'state')} isValid={stateValid} isInvalid={!stateValid && state?.isTouched}></Form.Control>
            <Form.Control.Feedback type="invalid">State cannot be empty </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-xs-2">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" onBlur={(event)=> validateInput(event, 'city')} isValid={cityValid} isInvalid={!cityValid && city?.isTouched}></Form.Control>
            <Form.Control.Feedback type="invalid">City cannot be empty </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-xs-2">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="number" placeholder="Enter pincode" onBlur={(event)=> validateInput(event, 'pincode')} isValid={pincodeValid} isInvalid={!pincodeValid && pincode?.isTouched}></Form.Control>
            <Form.Control.Feedback type="invalid">Pincode cannot be empty or 0 </Form.Control.Feedback>
        </Form.Group>

    </Row>
    <Button variant="success" type="submit" className="app-nav-action-btn">Save & Place Order {' '} <i className="fa fa-arrow-right fa-2x"></i> </Button>
</Form>
};

export default ContactDetails;
