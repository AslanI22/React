import React from 'react';

function App() {
  const isAdult = true;

  if (isAdult) {
    isAdult = <p>text1</p>;
  }
  else {
    isAdult = <p>text2</p>;
  }

  return <div>
    {isAdult}
  </div>;

}

export default App;