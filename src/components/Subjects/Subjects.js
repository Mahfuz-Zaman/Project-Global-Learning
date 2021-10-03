import './Subjects.css'
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Subjects = (props) => {
    const { name, image, price } = props.service
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="card-img" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Price:${price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Subjects;