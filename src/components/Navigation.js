// eslint-disable-next-line

import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="pills" sticky="top" >
    <Container>
        <Navbar.Brand>
            <Link to="Home" spy={true} smooth={true} duration={500}>
                <h1>일산방주교회</h1>
                {/* 원래는 로고가 들어가야 함 */}
            </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
                <Nav.Link><Link to="words" spy={true} smooth={true} duration={500}>
                    주일말씀
                </Link></Nav.Link>
                <Nav.Link><Link to="sermon" spy={true} smooth={true} duration={500}>
                    설교목록
                </Link></Nav.Link>
                <Nav.Link><Link to="service" spy={true} smooth={true} duration={500}>
                    예배안내
                </Link></Nav.Link>
                <Nav.Link><Link to="offering" spy={true} smooth={true} duration={500}>
                    온라인헌금
                </Link></Nav.Link>
                <Nav.Link><Link to="way" spy={true} smooth={true} duration={500}>
                    오시는길
                </Link></Nav.Link>
                <Nav.Link><Link to="minister" spy={true} smooth={true} duration={500}>
                    교역자안내
                </Link></Nav.Link>
                <Nav.Link><Link to="contact" spy={true} smooth={true} duration={500}>
                    CONTACT
                </Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>

    </Container>
    </Navbar>
);
}

export default Navigation;

