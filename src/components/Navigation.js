// eslint-disable-next-line

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'

const Navigation = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> ab829f3d9f389be470b82242a2fa8e4119ce9ef8
}

export default Navigation;

