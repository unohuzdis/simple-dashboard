import React from 'react';
// import logo from './logo.svg';
import './App.css';

import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';

function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar style = {{background: 'blue'}}>Sidebar</Sidebar>
        <Container>
          <Header style = {{background: 'red'}}>Header</Header>
          <Content style = {{background: 'yellow'}}>Content</Content>
          <Footer style = {{background: 'grey'}}>Footer</Footer>
        </Container>
      </Container>
    </div>
  );
}

export default App;
