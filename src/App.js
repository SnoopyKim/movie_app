import React from 'react';

function Food({ favorite }) {
  return <h3>I like { favorite }</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
    </div>
  );
}

export default App;
