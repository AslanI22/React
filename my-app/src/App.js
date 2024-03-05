import React from 'react';
import { nanoid } from 'nanoid'
import uuid from 'react-uuid';

const prods = [
  { id: id(), name: 'product1', cost: 100 },
  { id: id(), name: 'product2', cost: 200 },
  { id: id(), name: 'product3', cost: 300 },
];


function id() {
  let x = nanoid();
  return x
}
function App() {

}

export default App;
