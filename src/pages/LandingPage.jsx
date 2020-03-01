import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import SideNav from '../components/side-nav/SideNav';


const LandingPage = () => {
    return (
        <div>
            <Container>
                <Sidebar>
                    <SideNav />
                </Sidebar>
                <Container>
                    <Header style={{ background: 'red' }}>Header</Header>
                    <Content style={{ background: 'yellow' }}>Content</Content>
                    <Footer style={{ background: 'grey' }}>Footer</Footer>
                </Container>
            </Container>
        </div>
    );
}

export default LandingPage;
