import React from 'react';
import Age from './age';
import HooksCounter from './hooks-counter';

function App() {
  return (
    <React.Fragment>
      <Age age="15" />
      <Age age="25" />
      <Age age="30" />
      <HooksCounter />
    </React.Fragment>
  );
}

export default App;