import React from 'react';
import { nanoid } from 'nanoid'
import uuid from 'react-uuid';

function App() {
  function id() {
    const x = nanoid();
    const y = uuid();
    return x, y
  }
  return (
    id()
  );
}

export default App;
