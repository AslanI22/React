import React from 'react';
import { nanoid } from 'nanoid';

function App() {
  const x = nanoid();

  return (
    <div>
      {x}
    </div>
  );
}

export default App;
