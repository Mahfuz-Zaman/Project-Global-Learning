import './Footer.css'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white footer-body ">
            <Container className=" text-white  ">
                <Row>
                    <Col xs={4}>
                        <h1 className="text-warning">
                            Need Help?
                        </h1>
                        <span> <i className="fas fa-map-marker-alt"></i></span>
                        <address>
                            Main campus:
                            102/1, Sukrabad Mirpur Rd, Dhaka 1207
                        </address>
                        <span> <i className="fas fa-map-marker-alt"></i></span>
                        <address>
                            Permanent campus:
                            Global Learning <br />
                            Global Smart City, <br />
                            Ashulia, Dhaka.
                        </address>
                    </Col>
                    <Col xs={4}>
                        <h1 className="text-warning">For Contact</h1>
                        <span><i className="fas fa-envelope"></i></span>
                        <p>Email: <br />
                            globalnetwork@gnu.edu.bd</p>
                        <span><i className="fas fa-phone"></i></span>
                        <p> +02-885623</p>
                        <span><i className="fas fa-mobile-alt"></i></span>
                        <p>+88-01747489696,+88-01601689696</p>
                    </Col>
                    <Col >
                        <h1 className="text-warning">Be Social</h1>
                        <span><i className="fab fa-facebook-square ">----Facebook</i></span> <br />
                        <span><i className="fab fa-twitter-square">----Twitter</i></span> <br />
                        <span><i className="fab fa-instagram">----Instagram</i></span> <br />
                        <span><i className="fab fa-youtube-square">----Youtube</i></span>



                    </Col>
                </Row>
            </Container>
            <hr />
            <span className="text-center mb-0"><p>Copyright &copy;  2021 Global Learning. All Rights Reserved. </p></span>
        </div>
    );
};

export default Footer;