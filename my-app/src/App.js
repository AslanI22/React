import React from 'react';

function App() {
  function func(arg, event, arg1) {
    console.log(arg, event, arg1);
  }

  return <div>
    <button onClick={event => func('eee',
      event)}>act</button>
  </div>;
}

export default App;
