import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: 'nothing to see here :('
      }
    }
  
    handleWords = e => {
      let words = e.target.value;
      this.setState({ words });
    }
  
    handleClick = e => {
      let words = this.state.words
        .split('')
        .reverse()
        .join('');
  
      this.setState({ words });
    }
  
    render() {
      return (
        <div>
          <h3>{this.state.words}</h3>
          <input onChange={this.handleWords} />
          <button onClick={this.handleClick} >Click me :)</button>
        </div>
      );
    }
  }

  export default Main;