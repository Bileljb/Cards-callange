import {Card} from "react-bootstrap"
function MCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.el.posterUrl} />
            <Card.Body>
                <Card.Title>{props.el.title}</Card.Title>
                <Card.Text>
                    {props.el.rate}
                </Card.Text>
                <Card.Text>
                    {props.el.description}
                </Card.Text>
                <Card.Text>
                    {props.el.trailer}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default MCard