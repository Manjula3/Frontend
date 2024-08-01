import { useState } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weatherInfo, setWeatherInfo] = useState('')

  function getWeather() {
    const apikey='c4e5b406b6380b80e09cb23b0940475a';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
  
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data.list[0].main.temp);
      setWeatherInfo(data.list[0].main.temp)
    })
  }


  return (
    <>
      <div className='weather-container'>
      <input type="text" 
      placeholder='Enter city name'
      value={city}
      onChange={(e)=> setCity(e.target.value)} />
      <button onClick={getWeather}> Get Weather </button>
      <div className="weather-info">
        <h3>{weatherInfo}</h3>
      </div>
      </div>
    </>
  )
}

export default App
