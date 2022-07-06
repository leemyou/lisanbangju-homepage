// eslint-disable-next-line

import React from 'react';
// import styled from "styled-components";
import {Link} from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <Navbar  bg="light" variant="pills" sticky="top" collapseOnSelect expand="lg">
    <Container>
        <Navbar.Brand>
            <Link to="Home" spy={true} smooth={true}>
                <h1>일산방주교회</h1>
                {/* 원래는 로고가 들어가야 함 */}
            </Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>

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
    </Container>
  </Navbar>
  );
}

export default Navigation;




// export const Nav = styled.nav`
//     height: 80px;
//     width: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     color: white;
//     // position: sticky;
//     position: fixed;
//     top: 0;
//     padding: 30px;
// `
