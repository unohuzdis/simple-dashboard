import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import SideNav from '../components/side-nav/SideNav';
import TopNav from '../components/top-nav/TopNav';


const LandingPage = () => {
    return (
        <div>
            <Container style={{ background: "#F7F8FA", height: "100vh" }}>
                <Sidebar>
                    <SideNav />
                </Sidebar>
                <Container>
                    <Header>
                        <TopNav appearance="inverse" />
                    </Header>
                    <Content style={{ background: 'white' }}>Content</Content>
                    <Footer style={{ background: '#3498FF' }}>Footer</Footer>
                </Container>
            </Container>
        </div>
    );
}

export default LandingPage;
