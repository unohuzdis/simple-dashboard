import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Icon, Nav, Dropdown } from 'rsuite';

const TopNav = ({ onSelect, activeKey, ...props }) => {
    return (
        <div>
            <Navbar {...props}>
                <Navbar.Body>
                    <Nav onSelect={onSelect} activeKey={activeKey} pullRight>
                        <Nav.Item eventKey="Home" icon={<Icon icon="home" />}>
                            Home
                        </Nav.Item>
                        <Nav.Item eventKey="News">News</Nav.Item>
                        <Nav.Item eventKey="Products">Products</Nav.Item>
                        <Dropdown title="About">
                            <Dropdown.Item eventKey="Company">Company</Dropdown.Item>
                            <Dropdown.Item eventKey="Team">Team</Dropdown.Item>
                            <Dropdown.Item eventKey="Contact">Contact</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </div>
    );
}

export default TopNav;
