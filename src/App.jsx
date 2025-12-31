import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'

const App = () => {

  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchWeather = async () => {
   try {
    setLoading(true)
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?Key=d80e9af6ee0a4aab997174510253012&q=${city}`)
    const data = await res.json()
    setWeatherData(data)
    setLoading(false)
   } catch (error) {
      alert("Failed to fetch weather data")
   }
  }


  console.log(weatherData)
  

  return (

    // d80e9af6ee0a4aab997174510253012
    <div className='container'>
      <div className='input-Box'>
        <input
         className='input' 
         type='text' 
         placeholder='Enter city name'
         onChange={(e) => setCity(e.target.value)}
         value={city} />
        <button onClick={fetchWeather} className='search-btn'>Search</button>
      </div>
       {loading ? <p style={{paddingTop: "20px"}}>Loading data...</p> : weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  )
}

export default App