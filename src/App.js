import React from 'react';
const api = {
  key: '9dee6ea9c3b05ecdc95fdfed5d03b9a6',
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {

  /*Method to build dates*/
  const dateFormat = (df) => {
    let days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let day = days[df.getDay()];
    let date = df.getDate();
    let month = months[df.getMonth()];
    let year = df.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
  <div className="app">
    <main>
      <div className="search">
        <input type="text" className="search-input" placeholder="Buscar la región"/>
      </div>
      <div className="location-section">
        <div className="location">
          New York City, US
        </div>
        <div className="date">
          {dateFormat(new Date())}
        </div>
      </div>
      <div className="weather-section">
        <div className="temperature">
          15°C
        </div>
        <div className="weather">
          Sunny
        </div>
      </div>
    </main>
  </div>
  );
}

export default App;
