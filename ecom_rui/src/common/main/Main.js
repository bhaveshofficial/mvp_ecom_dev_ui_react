import './Main.css';
import {useState} from 'react';
import {Container} from 'react-bootstrap';
const Main = () => {

    const [greeting, updateGreeting] = useState("Hello");

    return (
        <Container fluid="sm">
            {greeting}
        </Container>
    );

}

export default Main;