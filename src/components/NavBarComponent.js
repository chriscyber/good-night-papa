import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap';

const NavBarComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto"><Button>Language</Button></NavbarBrand>
      <NavbarBrand href="/" className="mr-auto"><Button>Sign Up</Button></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar >
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
