import React from 'react';
import './Navs.css'
import {Navbar , Nav , Container, Button} from 'react-bootstrap';
import logo from './../../image/logo.png'

const Navs =()=> {
    return (
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
            <img src={logo} width={200} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Why Funnelll</Nav.Link>
                    <Nav.Link href="#link">Integrations</Nav.Link>
                    <Nav.Link href="#home">Dashboards</Nav.Link>
                    <Nav.Link href="#link">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Button className="btn">Get Started Free</Button>
                    <Nav.Link>
                    Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navs;