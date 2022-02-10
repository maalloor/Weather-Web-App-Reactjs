import React from 'react';
const api = {
  key: '9dee6ea9c3b05ecdc95fdfed5d03b9a6',
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  return (
  <div className="app">
    <main>
      <div className="search">
        <input type="text" className="search-input" placeholder="Buscar la región"/>
      </div>
    </main>
  </div>
  );
}

export default App;
