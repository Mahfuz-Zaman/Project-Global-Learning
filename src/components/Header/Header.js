import './Header.css'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "goldenRod",
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img
                    alt=""
                    src={"https://begindot.com/wp-content/uploads/2018/03/global-education-logo-800x800.png"}
                    width="70"
                    height="60"
                    className="d-inline-block align-top"
                />

                <Navbar.Brand className="fw-bold">Global Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-style " activeStyle={activeStyle} to="/home">HOME</NavLink>
                        <NavLink className="nav-style " activeStyle={activeStyle} to="/services">SERVICES</NavLink>
                        <NavLink className="nav-style " activeStyle={activeStyle} to="/blog">BLOG</NavLink>
                        <NavLink className="nav-style " activeStyle={activeStyle} to="/about">ABOUT
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;