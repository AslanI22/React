import React, { useState } from 'react';

function App() {
  const [fahrenheit, setFahrenheit] = useState('');

  function handleChange(event) {
    setFahrenheit(event.target.value);
  }

  function convertToCelsius() {
    const fahrenheitValue = parseFloat(fahrenheit);
    const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
    return isNaN(celsiusValue) ? 'Invalid input' : celsiusValue.toFixed(2);
  }

  return (
    <div>
      <label>Enter Fahrenheit: </label>
      <input value={fahrenheit} onChange={handleChange} />
      <p>Celsius: {convertToCelsius()}</p>
    </div>
  );
}

export default App;
