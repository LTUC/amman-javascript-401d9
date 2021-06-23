import React from 'react';
import Main from './main';
import Header from './header';
import { BrowserRouter as Router, HashRouter, MemoryRouter } from 'react-router-dom';

function App(props) {
    return (
        <Router>
            <Header />
            <Main />
        </Router>
    );
}

export default App;