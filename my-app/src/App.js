import React from 'react';

const prods = [
  { id: 1, name: 'product1', cost: 100 },
  { id: 2, name: 'product2', cost: 200 },
  { id: 3, name: 'product3', cost: 300 },
];

function App() {
  const res = prods.map(function (item) {
    return <p key={item.id}>
      <span>{item.name}</span>:
      <span>{item.cost}</span>
    </p>;
  });

  return <div>
    {res}
  </div>;
}
export default App;
