import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Subjects from '../Subjects/Subjects';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        services.slice(0, 4).map(service => <Subjects
                            key={service.id}
                            service={service}
                        ></Subjects>)
                    }
                </Row>

            </Container>
        </div>

    );
};

export default Home;