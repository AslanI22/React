import React from 'react';

function App() {
  const age = 19;
  let text;
  if (age > 18) {
    text = <p>text1</p>;
  }
  else {
    text = <p>text</p>;
  }
  return text;
}

export default App;