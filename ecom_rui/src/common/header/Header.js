import "./Header.css";
import {Container, Navbar, NavbarBrand} from 'react-bootstrap';


const Header = () => {

    return (
        <Navbar bg="light" variant="light">
            <Container fluid="sm">
                <NavbarBrand>                    
                    <span className="app-txt-var1">Ecom</span> MVP
                </NavbarBrand>    
            </Container>                  
        </Navbar>
    );
}

export default Header;