import './Subjects.css'
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Subjects = (props) => {
    const { name, image, cost } = props.service
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img className="card-img" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Tuition Fees:$-{cost}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Subjects;