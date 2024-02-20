import React from 'react';

function App() {
  const isAdmin = true;
  let content = null;
  if (isAdmin) {
    content = <div><p>text1</p></div>;
  }

  return content;

}

export default App;