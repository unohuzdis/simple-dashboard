import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Sidenav, Icon, Nav, Dropdown } from 'rsuite';

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#3498ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const SideNav = ({ onSelect, expand }) => {
    return (
        <div>
            <Sidenav.Header>
                <div style={headerStyles}>
                    <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                    <span style={{ marginLeft: 12 }}> BRAND</span>
                </div>
            </Sidenav.Header>
            <Sidenav
                expanded={expand}
                defaultOpenKeys={['3']}
                onSelect={onSelect}
            >
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="Dashboard" active icon={<Icon icon="dashboard" />}>
                            Dashboard
                        </Nav.Item>
                        <Nav.Item eventKey="User Group" icon={<Icon icon="group" />}>
                            User Group
                        </Nav.Item>
                        <Dropdown
                            eventKey="Starred"
                            trigger="hover"
                            title="Starred"
                            icon={<Icon icon="star" />}
                            placement="rightStart"
                        >
                            <Dropdown.Item eventKey="G1">G1</Dropdown.Item>
                            <Dropdown.Item eventKey="G2">G2</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            eventKey="Advanced"
                            trigger="hover"
                            title="Advanced"
                            icon={<Icon icon="magic" />}
                            placement="rightStart"
                        >
                            <Dropdown.Item eventKey="Geo">Geo</Dropdown.Item>
                            <Dropdown.Item eventKey="Devices">Devices</Dropdown.Item>
                            <Dropdown.Item eventKey="Retention">Retention</Dropdown.Item>
                            <Dropdown.Item eventKey="Visits">Visits</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            eventKey="Settings"
                            trigger="hover"
                            title="Settings"
                            icon={<Icon icon="gear-circle" />}
                            placement="rightStart"
                        >
                            <Dropdown.Item eventKey="Applications">Applications</Dropdown.Item>
                            <Dropdown.Item eventKey="Websites">Websites</Dropdown.Item>
                            <Dropdown.Item eventKey="Channels">Channels</Dropdown.Item>
                            <Dropdown.Item eventKey="Tags">Tags</Dropdown.Item>
                            <Dropdown.Item eventKey="Versions">Versions</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
};

export default SideNav;