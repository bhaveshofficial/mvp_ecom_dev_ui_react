import { Button, Card } from "react-bootstrap"



const ProductCard = ({p, btnInfo}) => {    

    return <Card>
        {
            p?.pimage && <Card.Img src={p?.pimage} width="100" height="200">

        </Card.Img>
        }
        <Card.Body>
            {
                p?.pname && <Card.Title className="app-txt-var1">
                {p?.pname}
            </Card.Title>
            }
            {
                p?.pdescription && <Card.Text>
                    {p?.pdescription}

            </Card.Text>
            }
            <Button>{p?.pprice}</Button>
            <Button variant="success" className="card-action-btn">{btnInfo.title}</Button>
        </Card.Body>
    </Card>

}

export default ProductCard;