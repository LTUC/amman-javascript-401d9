import './App.scss';
import React from 'react';
import Header from './header';
import Main from './main';

const Footer = () => {
  return (
    <footer>
      &copy; js401d9 2021
    </footer>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
