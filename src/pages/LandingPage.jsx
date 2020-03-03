import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import SideNav from '../components/side-nav/SideNav';
import TopNav from '../components/top-nav/TopNav';
import MainContent from '../components/content/main-content';




class LandingPage extends React.Component {
    constructor() {
        super();

        this.state = {
            clickedContent: 'Dashboard'
        };
    }

    handleClick = event => {
        this.setState({ clickedContent: event });
    };

    render() {
        return (
            <div>
                <Container style={{ background: "#F7F8FA", height: "100vh" }}>
                    <Sidebar>
                        <SideNav onSelect={this.handleClick} />
                    </Sidebar>
                    <Container>
                        <Header>
                            <TopNav appearance="inverse"
                                    onSelect = {this.handleClick}
                            />
                        </Header>
                        <Content style={{ background: 'white' }}>
                            <MainContent title={this.state.clickedContent} />
                        </Content>
                        <Footer style={{ background: '#3498FF' }}>Footer</Footer>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default LandingPage;
