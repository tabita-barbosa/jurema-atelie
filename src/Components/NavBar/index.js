import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './styles.css';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar d-flex" expand="md" light>
            <NavbarBrand className="nav-brand mr-auto" href="/">JUREMA ATELIÊ</NavbarBrand>
                <NavbarToggler onClick={toogle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto nav-itens" navbar>
                        <NavItem>
                            <NavLink className="nav-item" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-item" href="/produtos">Produtos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-item" href="/sobre">Sobre</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;