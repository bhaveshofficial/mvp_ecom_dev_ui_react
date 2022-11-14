import { Container } from "react-bootstrap"

const ErrorNotFound = () => {
    return <Container fluid="sm" className="mt-5">
        <img src="/dog_404img.png"></img>
        <br></br>
        <h2 className="app-txt-var1 ">Ooops.... Page not found</h2>
    </Container>
}

export default ErrorNotFound;