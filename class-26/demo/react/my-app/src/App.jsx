import logo from './logo.svg';
import './App.scss';
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>New header</h1>
    </header>
  );
};

const Footer = () => <footer>&copy; 2018</footer>;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'nothing to see here'
    }
  }


  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
  };

  handleClick = e => {
    let words = this.state.words
      .split('')
      .reverse()
      .join('');
    this.setState({ words });
  };


  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
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
