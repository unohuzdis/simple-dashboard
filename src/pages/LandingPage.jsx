import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import SideNav from '../components/side-nav/SideNav';
import TopNav from '../components/top-nav/TopNav';
import MainContent from '../components/content/MainContent';
import CustomFooter from '../components/footer/CustomFooter';

class LandingPage extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            clickedContent: 'Dashboard',
            expanded: true
        };
    }

    handleClick = event => {
        this.setState({ clickedContent: event });
    };

    // Throttling can be used for performance optimization
    handleWindowResize = () => {
        this.setState({ expanded: window.innerWidth > 600 });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        return (
            <div>
                <Container style={{ background: "#F7F8FA", height: "100vh" }}>
                    <Sidebar style={{ display: 'flex', flexDirection: 'column' }}
                        width={this.state.expanded ? 260 : 56}
                        collapsible>
                        <SideNav onSelect={this.handleClick} expand={this.state.expanded} />
                    </Sidebar>
                    <Container>
                        <Header>
                            <TopNav appearance="inverse"
                                onSelect={this.handleClick}
                            />
                        </Header>
                        <Content style={{ background: 'white' }}>
                            <MainContent title={this.state.clickedContent} />
                        </Content>
                        <Footer>
                            <CustomFooter />
                        </Footer>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default LandingPage;
