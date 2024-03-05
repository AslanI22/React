import React from 'react';
import { nanoid } from 'nanoid';

function App() {
  function id() {
    const x = nanoid();
    return x
  }
  return (
    id()
  );
}

export default App;
