import './Services.css'
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Subjects from '../Subjects/Subjects';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center m-5 ">
                <h1 className="text-success">Our All Programs & Services</h1>
                <h5>We are offering 36 undergraduate and graduate programs under 25 departments. Our curriculum is designed to help the students to develop the skills required for 21st-century employment.</h5> <br />
                <button className="btn btn-success">Read More</button>
            </div>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <Subjects
                            key={service.id}
                            service={service}
                        ></Subjects>)
                    }
                </Row>

            </Container>

        </div>
    );
};

export default Services;