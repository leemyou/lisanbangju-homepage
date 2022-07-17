import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll';
import './Navigation.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
        <Container>
            <Navbar.Brand>
                <Link to="Home" spy={true} smooth={true}>
                    <button className='nav-logo'></button>
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="words" spy={true} smooth={true} duration={300}>
                        <button className="btn-nav">주일말씀</button>
                    </Link>
                    <Link to="sermon" spy={true} smooth={true} duration={300}>
                        <button className="btn-nav">설교목록</button>
                    </Link>
                    <Link to="service" spy={true} smooth={true} duration={300}>
                        <button className="btn-nav">예배안내</button>
                    </Link>
                    <Link to="offering" spy={true} smooth={true} duration={300}>
                        <button className="btn-nav">온라인헌금</button>
                    </Link>
                    <Link to="way" spy={true} smooth={true} duration={300}>
                        <button className="btn-nav">오시는길</button>
                    </Link>
                    <Link to="minister" spy={true} smooth={true} duration={300}>
                        <button className="btn-nav">교역자안내</button>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={300}>
                        <button className="btn-nav">CONTACT</button>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default CollapsibleExample;