// eslint-disable-next-line

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'

const Navigation = () => {
    return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">
    
    <Container>
        <Navbar.Brand href="#Home">일산방주교회</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='nav-items' href="#words">주일말씀</Nav.Link>
                <Nav.Link className='nav-items' href="#sermon">설교목록</Nav.Link>
                <Nav.Link className='nav-items' href="#service">예배안내</Nav.Link>
                <Nav.Link className='nav-items' href="#offering">온라인헌금</Nav.Link>
                <Nav.Link className='nav-items' href="#way">오시는길</Nav.Link>
                <Nav.Link className='nav-items' href="#minister">교역자안내</Nav.Link>
                <Nav.Link className='nav-items' href="#contact">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}

export default Navigation;

