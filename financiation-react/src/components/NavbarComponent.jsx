import React, {Fragment, useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/NavbarComponent.css"
import logofinanzas from '../assets/images/logofinanzas.png';
import {Button, Container, Form, Nav, Navbar, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthContext";


const NavbarComponent = () => {

    let {user, logoutUser} = useContext(AuthContext)

    return (
        <Navbar expand="lg" id="navbarcs" className="navbarcs">
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand id="logoboton" alt='logoboton'><img src={logofinanzas} id='logoboton'
                                                                      alt="logo de ministerio de finanzas"/>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="navbarScroll"/>

                <Navbar.Collapse>
                    <Nav className="me-auto my-2 my-lg-0">
                        {user ? (
                            <Nav.Item>
                                <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
                            </Nav.Item>
                        ) : (
                                    <>
                                        <Container fluid>
                                            <Row>
                                                <Col className="d-flex justify-content-end">
                                                        <Button variant="outline-light" className="navLinkSignup" href="/signup">
                                                            Crear Cuenta
                                                        </Button>

                                                    <div className='mx-2'>
                                                            <Button variant="outline-light" className="" href="/login">
                                                                Iniciar Sesión
                                                            </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </>

                        )
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavbarComponent;
