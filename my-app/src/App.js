import React from 'react';

function App() {
  function func(event) {
    // event = 10;
    // console.log(event);
    console.log(event.target);
  }

  return <div>
    <button onClick={func}>act</button>
  </div>;
}

export default App;
