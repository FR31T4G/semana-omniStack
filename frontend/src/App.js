import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [count,setCount] = useState(0);
  function incrementar(){
    setCount(count+1);
    console.log(count);
  }
  return (
    <div>
      <Header title="Contador: "conta={count} />
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
