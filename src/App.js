import React, { useState } from 'react';
const api = {
  key: '9dee6ea9c3b05ecdc95fdfed5d03b9a6',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const spanishWeather = {
  Thunderstorm: 'Tormenta',
  Drizzle: 'Llovizna',
  Rain: 'Lluvia',
  Snow: 'Nieve',
  Mist: 'Bruma',
  Smoke: 'Humo',
  Haze: 'Neblina',
  Dust: 'Polvo',
  Fog: 'Niebla',
  Sand: 'Arena',
  Ash: 'Ceniza',
  Squall: 'Chubasco',
  Tornado: 'Tornado',
  Clear: 'Despejado',
  Clouds: 'Nubes'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = df => {
    if (df.key === 'Enter')
    {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  /*Method to build dates*/
  const dateFormat = (df) => {
    let days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let day = days[df.getDay()];
    let date = df.getDate();
    let month = months[df.getMonth()];
    let year = df.getFullYear();

    //const d = new Date((weather.dt - (weather.timezone*(-1))) * 1000);
    console.log(df);
    //console.log(d.toGMTString());
    return `${day}, ${date} ${month} del ${year}`;
  }

  return (
  <div className={(typeof weather.main != "undefined")
    ? ((weather.main.temp > 16)
    ? 'app warm' : 'app') : 'app'}>
    <main>
      <div className="search">
        <input type="text" className="search-input" placeholder="Buscar la región"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-section">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">
              {dateFormat(new Date())}
            </div>
          </div>
          <div className="weather-section">
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">
              {spanishWeather[weather.weather[0].main]}
            </div>
          </div>
        </div>
      ) : ('')}
    </main>
  </div>
  );
}

export default App;
