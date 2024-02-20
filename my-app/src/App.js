import React from 'react';

function App() {
  function showMess(text) {
    alert(text);
  }

  return <div>
    <button onClick={() => showMess('1')}>show1</button>
    <button onClick={() => showMess('2')}>show2</button>
    <button onClick={() => showMess('3')}>show2</button>
  </div>;
}

export default App;
