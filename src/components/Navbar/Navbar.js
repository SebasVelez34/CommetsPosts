import React from 'react';
import { Navbar, Nav, Icon } from 'emerald-ui';

const NavbarPage = () => (
    <Navbar breakAt="lg" style={{ backgroundColor: '#046cfc' }}>
        <Navbar.Brand>
            <h2>
                Patagonian Test
            </h2>
        </Navbar.Brand>
        <Nav collapsible>
            <a href="#foo">
                <Icon name="email" />
            </a>
        </Nav>
    </Navbar>
)

export default NavbarPage;