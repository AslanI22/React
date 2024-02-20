import React from 'react';

function App() {

  function getDigitsSum(number) {
    let sum = 0;
    let num = number;
    while (num !== 0) {
      let last = num % 10;
      sum += last;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  const x = getDigitsSum(123);

  return (
    <div>
      <p>{x}</p>
    </div>
  );
}

export default App;
